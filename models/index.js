const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const lodash = require('lodash');
const config = require('../config');
const db = {};
const DBConfig = config.db;
const dbOptions = {
  port: DBConfig.port,
  host: DBConfig.host,
  dialect: DBConfig.dialect
};
dbOptions.pool = DBConfig.pool;
const sequelize = new Sequelize(
  DBConfig.database,
  DBConfig.username,
  DBConfig.password,
  dbOptions
);
fs.readdirSync(__dirname)
.filter((file) => (file.indexOf('.') !== 0) && (file !== 'index.js'))
.forEach((file) => {
  const sModel = require(path.join(__dirname, file))(sequelize); //eslint-disable-line
  const model = sModel;
  db[model.name] = model;
});

Object.keys(db)
.map(name => db[name])
.filter(model => model.associate)
.forEach(model => model.associate(db));

module.exports = lodash.extend({
  sequelize,
  Sequelize
},
db
);
