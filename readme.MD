# Event App

[![Build Status](https://travis-ci.org/mohammedalics/angular2-events-app.svg?branch=master)](https://travis-ci.org/mohammedalics/angular2-events-app)

Event App is an Angular2 hands-on practice! 

### Tech
* [Angular2](https://angularjs.org) - HTML enhanced for web apps!
* [TypeScript](https://www.typescriptlang.org)
* [node.js](https://nodejs.org) - JavaScript runtime!
* [SystemJS](https://github.com/systemjs/systemjs) - Module Loader
* [RxJS](https://github.com/Reactive-Extensions/RxJS) - Async data streaming!
* [Karma](http://karma-runner.github.io) - Spectacular Test Runner for Javascript
* [Jasmine](https://jasmine.github.io) - Behavior-Driven Javascript
* more.. 

# How to: 

### Clone the repository
```sh
$ clone https://github.com/mohammedalics/angular2-events-app.git
$ cd angular2-event-app
```
### Install nvm
Follow [nvm installation script](https://github.com/creationix/nvm#install-script) 

### Install NodeJS
```sh
$ nvm install 6.3.0
$ nvm use 6.3.0
```
### Install Karma & Jasmine
```sh
$ npm install -g karma-cli@1.0.1
$ npm install karma@1.3.0 karma-chrome-launcher@2.0.0 karma-jasmine@1.0.2 jasmine-core@2.5.2 @types/jasmine@2.5.38 -D 
```
### Install package.json
```sh
$ npm install
```


Open your favorite Terminal and run these commands.

### First Tab: Docker
```sh
$ docker run -d -p 8808:8808 -v <PWD>:/usr/src/app nodesource/jessie:6.3.0 -t eventapp npm start
```
### (Optional) Second: Start Karma 
```sh
$ karma test
```

#### Verify the deployment by navigating to your server address in your preferred browser

```sh
127.0.0.1:8808
```

![screenshot](http://i64.tinypic.com/2d0ydi.jpg)


**Enjoy !!**

> practice idea is by pluralsight angular2 course.

