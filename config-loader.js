var JsonParser = require('webpack/lib/JsonParser');
var JsonGenerator = require('webpack/lib/JsonGenerator');

module.exports = function(content) {
  // Uncomment to fix the error -- uses private internal APIs
  // this._module.type = 'json';
  // this._module.parser = new JsonParser();
  // this._module.generator = new JsonGenerator();

  // Executes module as JS and returns exports as JSON
  return JSON.stringify(this.exec(content, this.resource));
};
