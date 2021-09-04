//add novo paciente
var botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault()

  var form = document.querySelector('#form-adiciona')
  //extraindo informações do paciente do form
  var paciente = obtemPacienteDoFormulario(form)
  console.log(paciente);

  //Cria a tr e td do paciente
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
  imcTd.textContent = calculaImc(peso, altura)

  pacienteTr.appendChild(nomeTd)
  pacienteTr.appendChild(pesoTd)
  pacienteTr.appendChild(alturaTd)
  pacienteTr.appendChild(gorduraTd)
  pacienteTr.appendChild(imcTd)

  //add paciente na tabela
  var tabebela = document.querySelector('#tabela-pacientes')
  tabebela.appendChild(pacienteTr)
})

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    altura: form.altura.value,
    peso: form.peso.value,
    gordura: form.gordura.value,
    imc: calculaImc(peso, altura)
  }
  return paciente
}
