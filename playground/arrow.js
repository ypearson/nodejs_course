var square1 = function(x)
{
    return x*x;
}

var square2 = (x) =>
{
    return x*x;
}

var square3 = (x) => x*x;

var square4 = x => x*x;

var user = {
    name: 'Bob',
    sayHi: () =>
    {
        console.log(arguments);
        console.log(`hello my name is ${this.name}`);

    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`hello my name is ${this.name}`);
    }

}

console.log(square1(3));
console.log(square2(3));
console.log(square3(3));
console.log(square4(3));

user.sayHi(1,2,3);

user.sayHiAlt(1,2,3);