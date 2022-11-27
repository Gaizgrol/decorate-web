# Organização de arquivos

Recomendamos criar uma pasta para cada componente criado, organizando os arquivos no seguinte formato:

```
📁 src
 |__ 📁 Component1
 |    |__ ⚙️ index.ts
 |    |__ 💄 styles.css
 |    |__ 📄 view.html
 |__ 📁 Component2
 |    |__ ...
 |__ 📁 Component3
      |__ ...
```

Caso queira você poderá organizar de formas diferentes os seus arquivos, mas pelo bem da simplicidade utilizaremos o formato acima na documentação.

## Papel de cada arquivo

- `📄 view.html`
  - Arquivo com a marcação em HTML dos elementos da interface. Aqui colocaremos os blocos de construção que utilizaremos na tela e alguns comandos para auxiliar a comunicação com o JavaScript.

- `💄 styles.css`
  - Arquivo em CSS com as estilizações criadas para os elementos da interface.

- `⚙️ index.ts`
  - Arquivo em TypeScript com a lógica principal do nosso componente.
