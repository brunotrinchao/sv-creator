const chalk = require('chalk')

module.exports = function (nome, option) {
  let tipo =
    option.option === 1
      ? { nome: 'componente', ext: '', art: 'o' }
      : { nome: 'diretiva', ext: '.js', art: 'a' }

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
