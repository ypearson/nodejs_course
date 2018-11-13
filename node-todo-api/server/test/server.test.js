const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [
        {   _id: new ObjectID(),
            text:"first todo"
        },
        {   _id: new ObjectID(),
            text:"second todo",
            completed:true,
            completedAt:333
        }];

beforeEach((done)=> {
    console.log("**remove");
    Todo.remove({}).then(() => {
    Todo.find({}).then((todos) => {console.log(todos)});
        return Todo.insertMany(todos);
    }).then(() => done() );
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {

    var text = 'Test todo text';
    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find({text}).then((todos) => {
            console.log(todos);
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
    });

    it('should not create a todo with invalid body data', (done) => {
        request(app)
          .post('/todos')
          .send({})
          .expect(400)
          .end((err, res) => {
            if (err) {
              return done(err);
            }

            Todo.find().then((todos) => {
              expect(todos.length).toBe(2);
              done();
            }).catch((e) => done(e));
          });
    });

describe('GET /todos', () => {
    it('should get all todos', (done) =>
    {
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
            expect(res.body.todos.length).toBe(2);
        })
        .end(done);
    });
});

});

describe("GET /todos/:id", () => {
    it('should return todo doc', (done) => {
        request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res) => {
            expect(res.body.todo.text).toBe(todos[0].text);
        })
        .end(done);
    });

    it('should return 404 if todo not found', (done) => {
        request(app)
        .get(`/todos/${new ObjectID().toHexString()}`)
        .expect(404)
        .end(done);
    });

    it('should return 404 for non-object ids', (done) => {
        request(app)
        .get(`/todos/${123}`)
        .expect(404)
        .end(done);

    });
});

describe("DELETE /todos:id", () => {
    it('should delete a todo doc', (done) => {
        request(app)
        .delete(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res) => {
            expect(res.body.todo.text).toBe(todos[0].text);
        })
        .end((err, res) => {
            if(err) {
                return done(err);
            }
            Todo.findById(todos[0]._id.toHexString()).then((todo) => {
                expect(todo).toNotExist();
                done();
            }).catch((err)=> done(err));
        });
    });

    it('should return 404 if todo not found', (done) => {
        request(app)
        .delete(`/todos/${new ObjectID().toHexString()}`)
        .expect(404)
        .end(done);
    });

    it('should return 404 for non-object ids', (done) => {
        request(app)
        .delete(`/todos/${123}`)
        .expect(404)
        .end(done);

    });
});


describe("PATCH /todo/:id", () => {
    it('should update a todo doc', (done) => {

        var text = "new text for test"

        request(app)
        .patch(`/todos/${todos[0]._id.toHexString()}`)
        .send({completed:true, text})
        .expect(200)
        .expect((res) => {
            expect(res.body.todo.text).toBe(text);
            expect(res.body.todo.completed).toBe(true);
            expect(res.body.todo.completedAt).toBeA('number');
        }).end((err, res) => {
            if(err) {
                return done(err);
            }
            Todo.findById(todos[0]._id.toHexString()).then((todo) => {
                expect(todo.text).toBe(text);
                expect(todo.completed).toBe(true);
                expect(todo.completedAt).toBeA('number');
                done();
            }).catch((err)=> done(err));
        });
    });

    it('should clear completedAt if not done', (done) => {
        var text = "new text for test part 2"
        request(app)
        .patch(`/todos/${todos[1]._id.toHexString()}`)
        .send({completed:false, text})
        .expect(200)
        .expect((res) => {
            expect(res.body.todo.text).toBe(text);
            expect(res.body.todo.completed).toBe(false);
            expect(res.body.todo.completedAt).toNotExist();
        }).end(done);
    });
});