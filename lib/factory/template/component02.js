const Template = require('./tpl/template.js')
const Script = require('./tpl/script.js')
const Style = require('./tpl/style.js')

module.exports = function (cli) {
  return [
    {
      template: `${Template(cli.nameFormat)}
<script src="./${cli.nameFormat}.js" />
<style src="./${cli.nameFormat}.scss" lang="scss" scoped />
            `,
      file: `index.vue`,
    },
    {
      template: Script(cli.nameFormat),
      file: `${cli.nameFormat}.js`,
    },
    {
      template: Style(cli.nameFormat),
      file: `${cli.nameFormat}.scss`,
    },
  ]
}
