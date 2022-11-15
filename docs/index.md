# 🌎Decorate

##  Motivação

### Estado atual das bibliotecas:

Bibliotecas de desenvolvimento web modernas atualmente pensam em componentes com dados separados em três categorias diferentes:

- Estados:
  - São dados mutáveis internos de um componente que podem ser alterados somente por ele mesmo;

- Propriedades (*props*)
  - São dados constantes que só podem ser alterados por um componente "dono" do componente atual;

- Emissores de evento
  - São dados que permitem que uma função seja disparada no componente dono do atual quando algum acontecimento (geralmente alguma mudança de estado) acontece internamente.

Algumas bibliotecas lidam de formas diferentes com essas categorias, mas no final das contas todas fazem essa separação de alguma forma:

- Angular
  - Estados: Atributos da classe são considerados estados
  - Propriedades: Atributos decorados com `@Input()` são expostos para componentes donos
  - Emissores de evento: Atributo decorado com `@Output()` atribuído a uma nova instância de EventEmitter do tipo de dado desejado

- React
  - Estados: `useState` (*function components*) ou `this.state` (*class components*)
  - Propriedades: Recebidas como primeiro parâmetro da função (*function components*) ou primeiro parâmetro do construtor (*class components*)
  - Emissores de evento: Não existem formalmente, mas pordemos recebem uma *callback* do componente dono em uma *prop* e internamente essa *callback* poderá ser chamada informando os dados do evento

- Vue
  - Estados: Método `data` na instância do componente que retorna um objeto com os dados
  - Propriedades: Objeto ou array armazenado no atributo `props` da instância do componente
  - Emissores de evento: `@event-name="$emit('eventName', data)"` na marcação ou `this.$emit('eventName', data)` na instância do componente

- Svelte
  - Estados: Qualquer variável declarada com `let` ou `var`
  - Propriedades: Qualquer variável precedida por um `export`
  - Emissores de evento: Um emissor de eventos é criado com `createEventDispatcher` e depois chamado com o primeiro argumento sendo o nome do evento e o segundo sendo os dados do evento


### Visão da biblioteca:
A proposta do Decorate é promover a redução da segregação dos dados em categorias diferentes (consequentemente diminuindo as diferentes formas de declaração e tratamento dos mesmos) e mudar somente o formato de leitura dos mesmos. Não existirão estados, propriedades e eventos: existirão somente dados.

E relaxe, não queremos remover eventos completamente - afinal de contas, *front-end* é baseado em eventos que ocorrem de forma assíncrona. Teremos vasto suporte para eles como em qualquer outra biblioteca, a única diferença é que você não será obrigado a usá-los em alguns casos nos quais em outras bibliotecas você seria 😉.