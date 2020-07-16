module.exports = function (type) {
  let tipo = type === 1? 'do componente':'da diretiva'
return [
  {
    type: 'input',
    name: 'name',
    message: `Nome ${tipo}:`,
    default: 'index',
    validate: function (value) {
      if (value.length) {
        return true
      } else {
        return 'Insira o nome.'
      }
    },
  },
]
}
