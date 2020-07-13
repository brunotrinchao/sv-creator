const Template = require('./tpl/template.js')
const Script = require('./tpl/script.js')
const Style = require('./tpl/style.js')

module.exports = function (cli) {
  return [
    {
      template: `
${Template(cli.nameFormat)}
<script>
    ${Script(cli.nameFormat)}
</script>
<style lang="scss" scoped>
    ${Style(cli.nameFormat)}
</style>
            `,
      file: `${cli.nameFormat}.vue`,
    },
  ]
}
