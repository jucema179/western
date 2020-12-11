const Mustache = require('mustache');
const fs = require('fs');

function getTemplate(templateName, model) {
  const template = fs.readFileSync(`./services/${templateName}`).toString();
  const page = Mustache.render(template, model);
  return page;
}

module.exports = getTemplate;
