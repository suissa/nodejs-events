// Importamos o módulo events que faz parte do core do Node.js
var events = require('events');
// Criamos um eventEmitter que é o responsável por
// criar/executar os eventos
var eventEmitter = new events.EventEmitter();

// Criamos uma função que será chamada quando um evento acontecer
var cagar = function () {
  console.log('cagando...');
}

// Ligamos o evento vontadeDeCagar com a função cagar
eventEmitter.on('vontadeDeCagar', cagar);

// Emitimos o evento vontadeDeCagar desencadeando a execução da função cagar
eventEmitter.emit('vontadeDeCagar');