const Template = require('./tpl/template.js')
const Script = require('./tpl/script.js')
const Postcss = require('./tpl/postcss.js')
const Stories = require('./tpl/stories.js')

module.exports = function (cli) {
  return [
    {
      template: `${Template(cli.nameFormat)}
<script src="./${cli.nameFormat}.js" />
<style src="./${cli.nameFormat}.postcss" lang="postcss" scoped />
            `,
      file: `${cli.nameFormat}.vue`,
    },
    {
      template: Script(cli.nameFormat),
      file: `${cli.nameFormat}.js`,
    },
    {
      template: Postcss(cli.nameFormat),
      file: `${cli.nameFormat}.postcss`,
    },
    {
      template: Stories(cli.name),
      file: `${cli.nameFormat}.stories.mdx`,
    },
  ]
}
