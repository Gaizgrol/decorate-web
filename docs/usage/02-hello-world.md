
## Olá mundo!

Vamos criar o nosso primeiro projeto com Decorate!

Dentro da pasta `src` execute os seguintes passos:

- Crie um arquivo `index.ts` com o conteúdo abaixo:
`index.ts`
```ts
import Decorate from 'decorate-web'

const container = document.body
// Isto fará com que uma aplicação Decorate utilize qualquer elemento HTML informado como área de trabalho
Decorate.register( container )
```

- Crie uma pasta com o nome do seu novo componente: `HelloWorld` e dentro dela crie os arquivos abaixo:

`index.ts`
```ts
@View()
export default class HelloWorld {
  text = 'mundo'
}
```

`styles.css`
```css
p {
  color: gray;
}
```


`view.html`
```html
<p>
    Olá {text}!
</p>
```

A sua estrutura de arquivos ficará assim:

```
📁 src
 |__ 📁 HelloWorld
 |    |__ ⚙️ index.ts
 |    |__ 💄 styles.css
 |    |__ 📄 view.html
 |__ ⚙️ index.ts
```

Execute `npm run compile` e acesse o arquivo `index.html` localizado na sua pasta `public`.