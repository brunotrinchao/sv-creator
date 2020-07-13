module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Nome do componente:',
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
