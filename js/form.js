//add novo paciente
var botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function () {
  event.preventDefault()

  var form = document.querySelector('#form-adiciona')

  var nome = form.nome.value
  var altura = form.altura.value
  var peso = form.peso.value
  var gordura = form.gordura.value

  var pacienteTr = document.createElement('tr')

  var nomeTd = document.createElement('td')
  var pesoTd = document.createElement('td')
  var alturaTd = document.createElement('td')
  var gorduraTd = document.createElement('td')
  var imcTd = document.createElement('td')

  nomeTd.textContent = nome
  alturaTd.textContent = altura
  pesoTd.textContent = peso
  gorduraTd.textContent = gordura
  imcTd.textContent = calculaImc(peso,altura)

  pacienteTr.appendChild(nomeTd)
  pacienteTr.appendChild(pesoTd)
  pacienteTr.appendChild(alturaTd)
  pacienteTr.appendChild(gorduraTd)
  pacienteTr.appendChild(imcTd)

  var tabebela = document.querySelector('#tabela-pacientes')
  tabebela.appendChild(pacienteTr)
})
