const list = {
  data: `
  data () {
      return {
      }
  },
  `,
components: `
  components: {},
`,
props: `
  props: [],
`,
methods: `
  methods: {},
`,
computed: `
  computed: {},
`,
watch: `
  watch: {},
`,
beforeCreate: `
  beforeCreate() {},
`,
created: `
  created() {},
`,
components: `
  components() {},
`,
beforeMount: `
  beforeMount() {},
`,
mounted: `
  mounted() {}
`
}

module.exports = function (cli) {
  let listaFormat = ''
  cli.format.forEach( element => {
    listaFormat = listaFormat + list[element]
  })
  return `
export default {
  name: 'app-${cli.nameFormat}',
  ${listaFormat}
}`
}
