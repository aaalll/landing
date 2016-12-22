# Landing Page
![Image of Landing](https://raw.github.com/aaalll/landing/master/landing.png)
Simply landing page used 2 languages.

### Tech

Landing uses a number of open source projects to work properly:

* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [EJS](http://ejs.co/) - Effective JavaScript templating.
* [MongoDB](https://www.mongodb.com/) - open-source cross-platform document-oriented database
* [jQuery] - duh


### Installation

landing-page requires [Node.js](https://nodejs.org/) v4+ to run.

Download and extract the [latest release](https://github.com/aaalll/landin).

```
git clone https://github.com/aaalll/landing
cd landing
```

Install the dependencies like express, mondoDb, ejs and devDependencies and start the server.

```sh
$ npm install -d
```
check out landing\routes\info.js and fix line:
```
MondoUrl = 'mongodb://localhost:27017/landing';
```
to yours.
Import data depending on your settings:
```
mongoimport --db landing --collection en --drop --file en.json
mongoimport --db landing --collection ru --drop --file ru.json
```
### Start app
```
node app.js
```

Open [http://localhost:3000](http://localhost:3000).
