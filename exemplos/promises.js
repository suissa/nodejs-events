// Importamos o módulo events que faz parte do core do Node.js
const events = require('events')
const Promise = require('bluebird')
// Criamos um eventEmitter que é o responsável por
// criar/executar os eventos
const eventEmitter = new events.EventEmitter()

const runPromise = (fn) => {
  console.log('running: ', fn.toString())
  return Promise.promisify(fn)
}

// Criamos as funções que serão chamadas quando o evento acontecer
const correrParaOBanheiro = function () {
  console.log('correndo para o banheiro...')
}

const cagar = function () {
  setTimeout(()=>console.log('esperando pra cagar'), 10000)
  console.log('cagando...')
}

const pegarPapelHigienico = function () {
  console.log('pegando o papele higienico com calma e cuidado...')
}
const limparABunda = function () {
  console.log('limpando o orifício anal para ficar macio e sedoso...')
}
const passarBomAr = function () {
  console.log('passando Bom Ar para mascarar o fedor de gambá apodrecendo...')
}

// Ligamos o evento vontadeDeCagar com as funções
eventEmitter.on('vontadeDeCagar', runPromise(correrParaOBanheiro))
eventEmitter.on('vontadeDeCagar', runPromise(cagar))
eventEmitter.on('vontadeDeCagar', runPromise(pegarPapelHigienico))
eventEmitter.on('vontadeDeCagar', runPromise(limparABunda))
eventEmitter.on('vontadeDeCagar', runPromise(passarBomAr))

// Emitimos o evento vontadeDeCagar desencadeando a execução da função cagar
eventEmitter.emit('vontadeDeCagar')