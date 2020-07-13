const Component01 = require('./template/component01')
const Component02 = require('./template/component02')
const Component03 = require('./template/component03')
const Directive = require('./template/directive')
function Creator(cli) {
  // Componente
  if (cli.option == 1) {
    if (cli.type === 1) {
      this.build = Component01(cli)
    }

    if (cli.type === 2) {
      this.build = Component02(cli)
    }

    if (cli.type === 3) {
      this.build = Component03(cli)
    }
  }

  // Diretiva
  if (cli.option == 2) {
    this.build = Directive(cli)
  }
}
module.exports = Creator
