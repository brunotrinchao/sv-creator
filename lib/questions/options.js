module.exports = [
  {
    type: 'list',
    name: 'option',
    message: 'O que deseja criar?',
    default: [1],
    choices: [
      {
        name: `1) Componente`,
        value: 1,
      },
      {
        name: `2) Diretiva`,
        value: 2,
      },
    ],
  },
]
