module.exports = [
      {
        type: 'checkbox',
        name: 'format',
        message: 'Formate o documento:',
        default: ['data'],
        choices: [
          {
            name: `data`,
            value: 'data',
          },
          {
            name: `components`,
            value: `components`,
          },
          {
            name: `methods`,
            value: `methods`,
          },
          {
            name: `watch`,
            value: `watch`,
          },
          {
            name: `beforeCreate`,
            value: `beforeCreate`,
          },
          {
            name: `created`,
            value: `created`,
          },
          {
            name: `beforeMount`,
            value: `beforeMount`,
          },
          {
            name: `mounted`,
            value: `mounted`,
          },
        ],
      },
    ]
