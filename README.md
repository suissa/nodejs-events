O Javascript nos oferece uma programacão orientada a eventos e com isso podemos criar sistemas mais reativos do que imperativos.

> Hein?

Sim já que em um sistema imperativo você precisa mandar as ações executarem, em um sistema reativo as ações devem acontecer a partir de alguma ação anterior, como um evento. Normalmente utilizando o padrão [Observer](http://en.wikipedia.org/wiki/Observer_pattern).

Para isso usaremos o módulo `events` do Node.js:

```
var events = require('events');
```

E instanciamos o [EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter) que é o responsável por criar e gerenciar nossos eventos.
```
var eventEmitter = new events.EventEmitter();
```

Ele nos fornecer as seguintes funções:

- addListener
- on
- once
- removeListener
- removeAllListeners
- setMaxListeners
- listeners
- emit

Porém nesse artigo utilizaremos apenas o `on` e o `emit` que são responsáveis por *escutar* e disparar um evento, respectivamente.

Exemplo utilizando `on`:

```
// Criamos uma função que será chamada quando um evento acontecer
var cagar = function () {
  console.log('cagando...');
}

// Ligamos o evento vontadeDeCagar com a função cagar
eventEmitter.on('vontadeDeCagar', cagar);
```

Exemplo utilizando `emit`:

```
// Emitimos o evento vontadeDeCagar desencadeando a execução da função cagar
eventEmitter.emit('vontadeDeCagar');
```

[https://github.com/suissa/nodejs-events/blob/master/exemplos/cagando.js](https://github.com/suissa/nodejs-events/blob/master/exemplos/cagando.js)

Mas não paramos por ai, nós também podemos adicionar várias funções para um único evento, utilizando o `on` você pode passar quantas funções precisar que quando o evento for emitido elas serão executadas na sequência.

```
// Criamos as funções que serão chamadas quando o evento acontecer
var correrParaOBanheiro = function () {
  console.log('correndo para o banheiro...');
};

var cagar = function () {
  console.log('cagando...');
};

var pegarPapelHigienico = function () {, ve
  console.log('pegando o papele higienico com calma e cuidado...');
};
var limparABunda = function () {
  console.log('limpando o orifício anal para ficar macio e sedoso...');
};
var passarBomAr = function () {
  console.log('passando Bom Ar para mascarar o fedor de gambá apodrecendo...');
};

// Ligamos o evento vontadeDeCagar com as funções
eventEmitter.on('vontadeDeCagar', correrParaOBanheiro);
eventEmitter.on('vontadeDeCagar', cagar);
eventEmitter.on('vontadeDeCagar', pegarPapelHigienico);
eventEmitter.on('vontadeDeCagar', limparABunda);
eventEmitter.on('vontadeDeCagar', passarBomAr);
```

[https://github.com/suissa/nodejs-events/blob/master/exemplos/cagando-on.js](https://github.com/suissa/nodejs-events/blob/master/exemplos/cagando-on.js)

Com isso já conseguimos criar um workflow baseado em eventos. 

>E se eu quisesse passar um JSON no evento para utilizá-lo como forma de comunicação efetiva?

É bem simples passarmos um JSON para um evento, precisamos apenas passar como parâmetro, olhe esse exemplo passando uma string:

```
var correrParaOBanheiro = function (vontade) {
  var velocidade = 'devagarosamente';
  if(vontade === 'alta') {
    velocidade = 'putavelozmente';
  }
  console.log('correndo para o banheiro ' + velocidade + '...');
};
eventEmitter.emit('vontadeDeCagar', 'alta');
```

[https://github.com/suissa/nodejs-events/blob/master/exemplos/cagando-on-argument.js](https://github.com/suissa/nodejs-events/blob/master/exemplos/cagando-on-argument.js)

E agora o exemplo utilizando JSON:

```
var correrParaOBanheiro = function (vontade) {
  var velocidade = 'devagarosamente';
  if (vontade.queredeira === 'dimais') {
    velocidade = 'putavelozmente';
  }
  console.log('correndo para o banheiro ' + velocidade + '...');
};

var passarBomAr = function (vontade) {
  var msg = 'passando Bom Ar para mascarar o fedor de gambá apodrecendo...';
  if (vontade.lugar === 'banheiro químico') {
    msg = 'Sai fora vazado e FODA-SE!';
  }
  console.log(msg);
};

// JSON a ser passado para o evento
var vontade = {
  queredeira: 'dimais',
  lugar: 'banheiro químico'
};
// Emitimos o evento vontadeDeCagar desencadeando a execução da função cagar
// Passando um parametro para o evento
eventEmitter.emit('vontadeDeCagar', vontade);
```
[https://github.com/suissa/nodejs-events/blob/master/exemplos/cagando-on-argument-json.js](https://github.com/suissa/nodejs-events/blob/master/exemplos/cagando-on-argument-json.js)

Ficou bem fácil pensar baseado em eventos não?

Mas há uma prática comumente usada na comunidade que é herdar a classe `eventEmitter`, para fazer isso vamos criar um objeto e herdar o *prototype* do `EventEmitter` e criar uma função que irá emitir nosso evento:

```
function Cagar (vontade) {
  this.vontade = vontade;

  events.EventEmitter.call(this);

  this.vontadeDeCagar = function () {
    console.log('alo mamae');
    this.emit('vontadeDeCagar');
  }
}

Cagar.prototype.__proto__ = events.EventEmitter.prototype;
```

[https://github.com/suissa/nodejs-events/blob/master/exemplos/cagando-class.js](https://github.com/suissa/nodejs-events/blob/master/exemplos/cagando-class.js)

