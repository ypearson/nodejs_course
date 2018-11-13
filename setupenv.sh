#!/usr/bin/env bash

#  https://nodejs.org/api/
#  https://www.npmjs.com/
#  https://lodash.com/
#  https://www.npmjs.com/package/axios
#  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
#  https://expressjs.com/
#  https://handlebarsjs.com/
#  https://toolbelt.heroku.com/install-ubuntu.sh
# https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
# https://github.com/mongodb/node-mongodb-native
# http://mongodb.github.io/node-mongodb-native/
# http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html
# https://mongoosejs.com/docs/guide.html
# https://httpstatuses.com/
# https://mlab.com/

sudo apt-get update
sudo apt-get install -y curl
curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
sudo apt-get install -y nodejs

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo service mongod start

mkdir -p robo3t && wget -c https://download.robomongo.org/1.2.1/linux/robo3t-1.2.1-linux-x86_64-3e50a65.tar.gz  -O - | tar -xz --strip-components=1 -C robo3t

wget https://dl.pstmn.io/download/latest/linux64 -O postman.tar.gz
sudo tar -xzf postman.tar.gz -C /opt
rm postman.tar.gz
sudo ln -s /opt/Postman/Postman /usr/bin/postman

# Path to database
# /var/lib/mongodb
# npm init
# npm install lodash --save
# npm install
# sudo npm install nodemon -g
# nodemon app.js
# npm install yargs@4.7.1 --save
# npm install request@2.73.0 --save
# npm install axios@0.13.1 --save
# npm install hbs@4.0.0 --save
# npm install mongodb@2.2.5 --save
# npm i express@4.14.0 body-parser@1.15.2 --save
# npm i expect@1.10.2 mocha@3.0.2 supertest@2.0.0 --save-dev
# npm run test-watch

# node inspect app.js add --title="23123" --body="56rget3"
# nodemon inspect app.js add --title="23123" --body="56rget3"
# node --inspect-brk app.js add --title="23123" --body="56rget3"
# nodemon server.js -e js,hbs
# heroku login
# heroku keys:add
# heroku keys:remove
# heroku keys
# ssh -v git@heroku.com
#
# heroku create
# The heroku create CLI command creates a new empty application on Heroku,
# along with an associated empty Git repository. If you run this command
# from your app’s root directory, the empty Heroku Git repository is
# automatically set as a remote for your local repository.
#
# git push heroku
# heroku open


# db.Todos.insert({name:"Mike"})
# db.Todos.find()
