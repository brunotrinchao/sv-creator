const fs = require('fs')

const helper = {
  strFriendly: (str) => {
    return str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join('-')
  },
  validatePath: (cli) => {
    return fs.existsSync(helper.generatePath(cli))
  },
  generatePath: (cli) => {
    let arrDir = cli.path.split('/')
    let dir = cli.path
    // Verifica se existe "src" no caminho passado
    if (arrDir[0] != 'src') {
      dir = `src/${cli.path}`
    }

    // Adiciona ao caminho o nome para criar a pasta
    if(cli.option == 1){
      dir += `/${cli.nameFormat}`
    }

    return dir.toLowerCase().replace(/\s+/g, '-')
  },
}

module.exports.helper = helper
