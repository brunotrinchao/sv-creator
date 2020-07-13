const Directive = require('./tpl/directive.js')

module.exports = function (cli) {
  return [
    {
      template: `${Directive(cli.nameFormat)}`,
      file: `${cli.nameFormat}.js`,
    },
  ]
}
