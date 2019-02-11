const authRouter = require('./auth');
module.exports = function (app) {
  app.use('/api/auth', authRouter);
};
