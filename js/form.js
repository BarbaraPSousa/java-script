//add novo paciente
var botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault()

  var form = document.querySelector('#form-adiciona')
  //extraindo informações do paciente do form
  var paciente = obtemPacienteDoFormulario(form)

  //Cria a tr e td do paciente
  var pacienteTr = montaTr(paciente)
  pacienteTr.classList.add("paciente")
  //add paciente na tabela
  var tabebela = document.querySelector('#tabela-pacientes')
  tabebela.appendChild(pacienteTr)

  form.reset() // limpa formulario
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

function montaTr(paciente) {
  var pacienteTr = document.createElement('tr')

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

  return pacienteTr
}

function montaTd(dados,classe) {
  var td = document.createElement("td")
  td.textContent = dados;
  td.classList.add(classe);
  return td;
  
}
