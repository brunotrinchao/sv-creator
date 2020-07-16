const { helper } = require('../helper')
const chalk = require('chalk')

module.exports = function (nameFormat, type) {
  return [
    {
      type: 'input',
      name: 'path',
      message: 'Pasta do componente (raiz src):',
      default: 'src',
      validate: function (input) {
        let cli = { path: input, nameFormat: nameFormat }
        if (helper.validatePath(cli) && type === 1) {
          console.log(
            ` ${chalk.bold.red(
              ' (Já existe uma pasta com o caminho informado)'
            )}`
          )
          return false
        }
        return true
      },
    },
  ]
}
