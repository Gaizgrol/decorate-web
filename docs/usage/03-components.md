# Componentes

### Arquivos de marcaรงรฃo com nomes diferentes de `view.html`

```ts
@View({ file: './folder/other.html' })
export default class MyComponent {
  text = 'mundo'
}
```

## Utilizando componentes aninhados

Estrutura de arquivos do exemplo:
```
๐ ChildComponent
 |__ โ๏ธ index.ts
 |__ ๐ view.html
๐ OwnerComponent
 |__ โ๏ธ index.ts
 |__ ๐ view.html
```

`ChildComponent`
```html
<!-- view.html -->
<p>
  Sou um componente filho!
</p>
```
```ts
// index.ts
@View()
export default class ChildComponent {}
```

`OwnerComponent`
```html
<!-- view.html -->
<div>
  <ChildComponent/>
</div>
```
```ts
// index.ts
import ChildComponent from '../ChildComponent'

@View({ uses: { ChildComponent } })
export default class OwnerComponent {}
```


### Componentes com outros nomes

`OwnerComponent`
```html
<!-- view.html -->
<div>
  <OtherName/>
</div>
```
```ts
// index.ts
import ChildComponent from '../ChildComponent'

@View({ uses: { 'OtherName': ChildComponent } })
export default class OwnerComponent {}
```
