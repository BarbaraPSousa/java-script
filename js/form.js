//add novo paciente
var botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault()

  var form = document.querySelector('#form-adiciona')

  //extraindo informações do paciente do form
  var paciente = obtemPacienteDoFormulario(form)

  //Cria a tr e td do paciente
  var pacienteTr = montaTr(paciente)

  //validando dados de paciente
  var erros = validapaciente(paciente)
  if (erros.length > 0) {
    exibeMensagemDeErros(erros)
    return
  }

  //add paciente na tabela
  var tabebela = document.querySelector('#tabela-pacientes')
  tabebela.appendChild(pacienteTr)

  form.reset() // limpa formulario

  var mensagensErro = document.querySelector('#mensagens-erros')
  mensagensErro.innerHTML = ''
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
  pacienteTr.classList.add("paciente")

  pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
  pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
  pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
  pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
  pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))

  return pacienteTr
}

function montaTd(dados, classe) {
  var td = document.createElement('td')
  td.classList.add(classe)
  td.textContent = dados
  return td
}

function validapaciente(paciente) {
  var erros = []

  if (paciente.nome.length == 0) {
    erros.push('O nome não pode ser em branco')
  }

  if (paciente.gordura.length == 0) {
    erros.push('O gordura não pode ser em branco')
  }

  if (paciente.peso.length == 0) {
    erros.push('O peso não pode ser em branco')
  }

  if (paciente.altura.length == 0) {
    erros.push('A altura não pode ser em branco')
  }

  if (!validaPeso(paciente.peso)) {
    erros.push('Peso é inválido!')
  }
  if (!validaAltura(paciente.altura)) {
    erros.push('Altura é Inválidada!')
  }
  return erros
}

function exibeMensagemDeErros(erros) {
  var ul = document.querySelector('#mensagens-erro')
  ul.innerHTML = ''

  erros.forEach(function (erro) {
    var li = document.createElement('li')
    li.textContent = erro
    ul.appendChild(li)
  })
}
