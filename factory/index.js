const fs = require('fs')
const { helper } = require('../helper')
const Creator = require('./creator')

class Factory {
  constructor(cli) {
    let path = this.createFolders(cli)
    if (path) {
      const creator = new Creator(cli)

      creator.build.forEach((element) => {
        fs.writeFile(`${path}/${element.file}`, element.template, (error) => {
          if (error) {
            console.log(error)
          }
        })
      })
    }
  }

  createFolders = function (cli) {
    if (!helper.validatePath(cli)) {
      let _path = helper.generatePath(cli)
      fs.mkdirSync(_path, { recursive: true })
      return _path
    }
    return false
  }
}

module.exports = Factory
