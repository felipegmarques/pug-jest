const pug = require('pug');

function transformPugToHtml(src, filename) {
  try {
    const template = pug.compile(src, { filename });
    const html = template();
    const content = JSON.stringify(html);
    return `module.exports = ${content};`;
  } catch (e) {
    throw e;
  }
}

module.exports = {
  process(src, filePath) {
    return transformPugToHtml(src, filePath);
  }
};
