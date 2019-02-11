# Nodejs Express Mysql Sequelize Demo App

This is a demo node.js application illustrating various features used in everyday web development, with a fine touch of best practices.

Database - MySQL (Setup local or test instance for development use, setup in AWS RDS for prod)
Framework - nodejs (express, pm2) - Run with pm2 to manage uptime/restarts/long term deploys

## Getting Setup
Setup nodejs and mysql.

## Requirements
* [NodeJs](https://nodejs.org) >= 8.x 
* [Mysql](https://www.mysql.com/) >= 8.x

**NOTE:** Do not forget to set the sendgrid  `APIKEY`. In `development` env, you can set the env variables into config/development.js for development and config/production.js for production mode.
Connect to mysql and create mysl db `node-demo-app`.
Set mysql username, password and DB name into env, you can set mysql env variables into config/development.js, config/production.js and config/config.js for db migration.


## Install

```sh
$ git clone https://github.com/neat-soft/node-express-mysql-sequelize.git
$ npm install
$ sudo npm install -g pm2
$ sudo pm2 start pm2.json
```
## Run
```sh
$ npm start
```
## Run server with pm2
```sh
$ sudo pm2 start pm2.json
```
## Test api with postman
Please import `Node-Express-MySQL-DEMO.postman_collection.json ` into your post man
There are 6 apis you can test 

To view more detailed documentation regarding the API, check out the [API documentation](https://github.com/neat-soft/node-express-mysql-sequelize/wiki).

## DB migration with sequelize
```sh
$ npm migrate
```
**NOTE:** You can find migration template files from templates/migration

This application integrates the following services & APIs:
* [Sendgrid](https://sendgrid.com/) - Used to send transactional emails.

