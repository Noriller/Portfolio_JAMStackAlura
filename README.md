# O que eu fiz de MAIS interessante neste projeto

### Preparações necessárias para o uso das ferramentas abaixo

No momento, é necessário um array de breakpoints (de preferencia começando em 0, já que está sendo suposto de "X a Y" em algumas partes.).

## insertMediaQuery

Uso básico:

```javascript
    insertMediaQuery(...cssValues)
```

Inserir os valores separados por vírgula.

São aceitos valores CSS válidos como 'String' ou como funções 'css' do Styled Components.

A função então insere como CSS do Styled Components as "@Media Queries" que serão interpretadas pelo browser.

## getBreakpointValue

Uso básico:

```javascript
    ${({ theme }) => theme.getBreakpointValue(...cssValues)};
```

Usar dentro de qualquer função/componente do Styled Components.

Aceita valores puros (strings, numbers...) ou funções css do Styled Components.

Por aceitar valores, é possível ter um CSS mais semântico:

```javascript
    const StyledComponent = styled.div`
        font-size: ${({ theme }) => 
            theme.getBreakpointValue(10, 16, 24, 32)}px;
    `
```


### Sobre os breakpoints e as funções

Considerando que é usado uma abordagem de "pelo menos" X pixeis em todos, as funções acima seguem a seguinte regra:

- Valores nulos (null) não são inseridos e criam condições "até" X pixeis.

- Valores vazios (empty string, '') são considerados continuações do valor anterior. Em outras palavras, utilizam o mesmo valor anterior.

  - Se o valor anterior for nulo, este também será.

- Considerando a abordagem de "Mobile first", os primeiros valores são "obrigatórios", enquanto que o resto pode ser omitido. Em caso de omissão, é considerado o valor '' (empty string).

  - Ex: mesmo com diversos breakpoints, se a diferença acontece apenas do primeiro para o segundo breakpoint, coloque os dois e omita o resto.

### TODO

- Adicionar possibilidade de passar os valores como objetos nomeados (ex: xs: {...}, xl: {...})

- Diminuir verbosidade. (Talvez usar como um decorator das funções Styled Components que teriam já 'acesso nativo' a função.)

  - Neste caso, pensando em desempenho, a função pode retornar valores de CSS "@media query" que não precisam renderizar novamente os componentes.

- Publicar como um Framework! 😂

  - O nome já tenho: "Styled Media Queries"!
