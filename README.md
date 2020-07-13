# SV Creator

CLI feito para facilitar a geração de components e diretivas

## Instalação

```js
yarn add sv-creator
```

### Usando

```bash
sv-creator
```

#### Opções

- Componente
- Diretiva

#### Nome

Informe o nome do componente ou diretiva

#### Tipo (componente)

- index.vue
- index.vue, index.js, index.scss
- index.vue, index.js, index.stories.mdx, index.postcss

_Os arquivos .js .cscc, .mdx e .opstcss terão o mesmo nome do componente_

#### Caminho

Informe o caminho a ser gerado.

- A pasta raiz é **src** e não precisa ser informado
- A pasta do componente ou diretiva será o nome dado anteriormente
- Se ja existir um apasta com o caminho informado, não poderá prosseguir
