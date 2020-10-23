# A importância de realizar testes no Front-End

Antes de pensarmos em testes temos que ter noção sobre qualidade de software e em que propósito os testes podem ajudar a garantir uma melhor qualidade nos produtos que desenvolvemos.

Importante lembrar que, mesmo que com total cobertura, testes não garantem a total qualidade de um software.

Algumas empresas como o Nubank e o LuizaLabs (Magazine Luiza) não tem profissionais de QA pois consideram que a qualidade do software é uma atribuição e responsabilidade do próprio desenvolvedor.

## Tipos de testes

### Testes unitários

Os testes unitários são responsáveis por atestar que uma função, uma condicional, um estado ou seja, uma pequena unidade do seu código se comporte da maneira correta. A ideia é verificar se uma parte individual e isolada da sua aplicação corresponde da maneira que é esperada.

### Testes de integração
 
Consiste em verificar se todos as unidades de testes quando integradas, funcionam bem juntas e em plena harmonia. Um exemplo de teste de integração é testar o resultado de uma chamada em uma API, populando uma lista de um componente, cenários de erros quando uma request falhar e etc. Componentes mais complexos tendem a ter testes de integração.

### Testes E2E (End-to-End)

São tipos de testes que simulam o fluxo real do comportamento de um software, varrendo os cenários de ponta a ponta. Um exemplo é o nosso Cadastro de Pré-perfil no Luhn. O teste E2E consiste em realizar é testar o caminho feliz de todas as etapas do cadastro e também contemplar os centários de erros.

### Metodologias para desenvolvimentos orientados a testes

[TDD - Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development) criado pelo Engenheiro de Software [Kent Beck](https://en.wikipedia.org/wiki/Kent_Beck)

![TDD](https://i0.wp.com/blog.sciensa.com/wp-content/uploads/2017/08/tdd_flow.gif?resize=489%2C511)

### Cobertura de testes (Test Coverage)

O que se analiza durante a cobertura de testes:

 - Lines - Cada linha do seu código foi executada?
 - Branches - Os `ifs` e `elses` do seu código foram testados?
 - Functions - As funções do seu código foram chamadas em todos os cenários?
 - Statements - Os estados da sua aplicação foram testados?

 Ferramantas de coberturas de testes mostram em porcentagem o que está ou não coberto por testes.

### Spies, stubs e Mocks
- Spy: são funções ou objetos úteis para testar callbacks de funções;
- Stub: é tipo um Spy with lasers (🤣) - servem para simular comportamentos previsíveis; 
- Mock:  Pode ser uma função ou um objeto que simule algo que pode ser comparado com algo que é experado;

  Exemplos:   
  - um objeto fake que simula o payload de uma request;
  - uma função fake criada para simular um evento de click;

### Contextos de testes unitários

```javascript
describe('<Button />', () => {
  // Aqui devem ser executados testes relacionados ao contexto do Botão
  // Não faz nenhum sentido eu testar por exemplo um componente <InputText /> sendo que não pertence ao contexto do <Button />

  beforeEach(() => {
    // antes de cada caso executa um determinado comando
  });

  afterAll(() => {
    // ao fim de todos os testes executados dentro deste contexto, um determinado comando é executado 
  });

  it('should call a function after click', () => {
    // parte isolada de teste
  });
});
```

### Ferramentas para testes unitários e de integração em JavaScript

Test runners
- [Jest](https://jestjs.io/)
- [Mocha](https://mochajs.org/)
- [Jasmine](https://jasmine.github.io/)
- [QUnit](https://qunitjs.com/)

Testing libraries
- [Testing Library](https://testing-library.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/introenzyme)
- [Enzyme](https://enzymejs.github.io/enzyme/)

Assertions
- [Chai.js](https://www.chaijs.com/)

Code Coverage
- [Istanbul.js](https://istanbul.js.org/)

<b>Nice to know</b>: O [Create React App](https://create-react-app.dev/docs/running-tests) nas versões mais recentes já vem como test runners, libraries, assertions e coverages tudo junto integrado. 

### Ferramentas para testes End-To-End

- [Cypress](https://www.cypress.io/)
- [Nightwatch](https://nightwatchjs.org/)


## Hands On


## Links úteis:
- [CodeSandbox do Testing Library](https://codesandbox.io/s/github/kentcdodds/react-testing-library-examples/tree/master/?from-embed=&initialpath=/__tests__/async.js&file=/src/__tests__/update-props.js) com diversos exemplos de casos de testes.
- [Testing Playground](https://testing-playground.com/) - Exemplos de como executar `queries` via Testing Library.
- [Exemplo de teste de alto nível com React Testing Library](https://medium.com/reactbrasil/exemplo-de-teste-de-alto-n%C3%ADvel-com-react-testing-library-5c001e89d493)
- [Common mistakes with React Testing Library - With Kent C Dodds, the creator of Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## Cursos (online)
[JS com TDD na Prática](https://www.udemy.com/course/js-com-tdd-na-pratica/?couponCode=PROMOOCT20)
[React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/curso-reactjs-ninja/)
[Modern React with Redux [2020 Update]](https://www.udemy.com/course/react-redux/);
[React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
[JavaScript - The Complete Guide 2020 (Beginner + Advanced)](https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/)