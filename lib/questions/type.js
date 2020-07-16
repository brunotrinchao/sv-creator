module.exports = function (nome) {
  return [
    {
      type: 'list',
      name: 'type',
      message: 'Tipo de componente',
      default: [1],
      choices: [
        {
          name: `1) index.vue`,
          value: 1,
        },
        {
          name: `2) index.vue, ${nome}.js, ${nome}.scss`,
          value: 2,
        },
        {
          name: `3) index.vue, ${nome}.js, ${nome}.stories.mdx, ${nome}.postcss`,
          value: 3,
        },
      ],
    },
  ]
}
