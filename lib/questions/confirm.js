const chalk = require('chalk')

module.exports = function (nome, option) {
  let tipo =
    option == 1
      ? { nome: 'componente', ext: '', art: 'a' }
      : { nome: 'diretiva', ext: '.vue', art: 'o' }
  return [
    {
      type: 'confirm',
      name: 'confirmar',
      message: `Certeza que dejesa criar ${tipo.art} ${
        tipo.nome
      }: ${chalk.bold.red(nome + tipo.ext)} ?`,
    },
  ]
}
