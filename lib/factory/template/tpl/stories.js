module.exports = function (name) {
  return `import { Meta, Story, Props, DocsContainer } from '@storybook/addon-docs/blocks';
import { withKnobs, text } from '@storybook/addon-knobs';
import Componente from './index';
import { defineKnobProps } from '../../helpers';

<Meta
  title=""
  component={Componente}
  parameters={{
    docs: {
      container: ({ children, context }) => (
        <DocsContainer context={context}>
          <div class="tema-claro-200">{children}</div>
        </DocsContainer>
      ),
    },
  }} />

## ${name}


**Link para guia: https: **

<Story name="${name}" >
  {{
    components: { Componente },
    data() {
      return {
      }
    },
    template: ''
  }}
</Story>

<!-- Playground não é exibido na documentação -->
<Story name="Playgroud" decorators={[withKnobs]} parameters={{ docs: { disable: true } }}>
  {{
    components: { Componente },
    props: {
    },
    template: ''
  }}
</Story>

## Markup

## Propriedades do componente
<Props of={Componente} />`
}
