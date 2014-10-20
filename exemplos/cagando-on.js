// Importamos o módulo events que faz parte do core do Node.js
var events = require('events');
// Criamos um eventEmitter que é o responsável por
// criar/executar os eventos
var eventEmitter = new events.EventEmitter();

// Criamos as funções que serão chamadas quando o evento acontecer
var correrParaOBanheiro = function () {
  console.log('correndo para o banheiro...');
};

var cagar = function () {
  console.log('cagando...');
};

var pegarPapelHigienico = function () {
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

// Emitimos o evento vontadeDeCagar desencadeando a execução da função cagar
eventEmitter.emit('vontadeDeCagar');