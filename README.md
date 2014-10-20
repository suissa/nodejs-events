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


