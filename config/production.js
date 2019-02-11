const config = {
    app: {
      port: 3000,
      project: 'node-express-mysql-sequelize-demo-app',
      url: 'http://localhost:3000/api',
      secret: 'asdfasfasdfasdafsdf231243243234234234234234234234',
    },
    db: {
      host: 'localhost',
      database: 'node-demo-app',
      username: '',
      password: '',
      dialect: 'mysql',
      port: 3306,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      logging: false
    },
    sendgrid: {
      apiKey: ''
    }
  }
  module.exports = config;