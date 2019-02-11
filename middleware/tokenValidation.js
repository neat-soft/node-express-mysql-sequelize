const models = require('../models');
const config = require('../config');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const reduceErrorMessage = require('../utils/reduceErrorMessage');
const whiteList = [
  '/api/auth/signup',
  '/api/auth/login',
  '/api/auth/confirm-email',
  '/api/auth/confirm-email/deeplink',
  '/api/auth/forgot-password',
  '/api/auth/validate-reset-password',
  '/api/auth/reset-password',
  '/api/auth/changepassword',
  '/api/auth/verificationemail',
  '/api/auth/refreshsession',
];
const adminApis = [
  '/admin',
];
const includes = require('lodash').includes;

module.exports = async function (req, res, next) {
  try {
    if (includes(whiteList, req.path)) {
      return next();
    }
    // Check header or url parameters or post parameters for token
    const token = _.get(req.headers, 'authorization', null);

    // No token provide, return error
    if (!token) { throw new Error('No token provided'); }

    const { tokenType } = config.auth;
    const { secret } = config.app;
    // Invalid authorization header
    const tokenValues = token.split(' ');
    if (tokenValues.length !== 2) { throw new Error('Invalid token'); }
    if (tokenValues[0] !== tokenType) { throw new Error('Invalid token type'); }
    // Decode token and inject user data in request
    const payload = await jwt.verify(tokenValues[1], secret);
    const userQuery = { where: { id: payload.id } };
    const user = await models.user.findOne(userQuery);
    if (!user) { throw new Error('No user found'); }
    if (!user || user.id === '') {
      return res.status(400).send({
        result: 'error',
        message: 'Not found user with your access token'
      });
    }
    if (includes(adminApis, req.path) || req.path.includes('/admin')) {
      if (!user.isAdmin) { throw new Error('You are not admin.'); }
    }
    req.user = user.get();
    next();
    // check header or url parameters or post parameters for token
  } catch (error) {
    return res.status(403).send({ result: 'error', message: reduceErrorMessage(error) });
  }
};
