const config = require('../config');
const sendgridMail = require('@sendgrid/mail');
sendgridMail.setApiKey(config.sendgrid.apiKey);
module.exports = sendgridMail;
