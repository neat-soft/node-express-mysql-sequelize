const config = require('../config');
const ejs = require('ejs');
const path = require('path');
exports.getRenderedTemplate = (templateName, data) => {
  try {
    const template = require(`../templates/emails/default/${templateName}`); //eslint-disable-line
    return template.render(data);
  } catch (error) {
    console.log('getRenderedTemplate error: ', error);
  }
  return '';
};


exports.renderHtmlTemplate = async (templateName, data) => {
  try {
    const locals = {
      appLink: data.link,
      project: data.project,
      code: data.code
    };
    const emailTemplateLink = path.join(__dirname, '../templates/emails/html', `${templateName}.ejs`);
    const html = await ejs.renderFile(emailTemplateLink, locals);
    return html;
  } catch (error) {
    console.log('getRenderedTemplate error: ', error);
    return '';
  }
};

