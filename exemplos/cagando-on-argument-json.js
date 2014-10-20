// Importamos o módulo events que faz parte do core do Node.js
var events = require('events');
// Criamos um eventEmitter que é o responsável por
// criar/executar os eventos
var eventEmitter = new events.EventEmitter();

// Criamos as funções que serão chamadas quando o evento acontecer
var correrParaOBanheiro = function (vontade) {
  var velocidade = 'devagarosamente';
  if (vontade.queredeira === 'dimais') {
    velocidade = 'putavelozmente';
  }
  console.log('correndo para o banheiro ' + velocidade + '...');
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
var passarBomAr = function (vontade) {
  var msg = 'passando Bom Ar para mascarar o fedor de gambá apodrecendo...';
  if (vontade.lugar === 'banheiro químico') {
    msg = 'Sai fora vazado e FODA-SE!';
  }
  console.log(msg);
};

// Ligamos o evento vontadeDeCagar com as funções
eventEmitter.on('vontadeDeCagar', correrParaOBanheiro);
eventEmitter.on('vontadeDeCagar', cagar);
eventEmitter.on('vontadeDeCagar', pegarPapelHigienico);
eventEmitter.on('vontadeDeCagar', limparABunda);
eventEmitter.on('vontadeDeCagar', passarBomAr);

// JSON a ser passado para o evento
var vontade = {
  queredeira: 'dimais',
  lugar: 'banheiro químico'
};
// Emitimos o evento vontadeDeCagar desencadeando a execução da função cagar
// Passando um parametro para o evento
eventEmitter.emit('vontadeDeCagar', vontade);



