var titulo = document.querySelector('.titulo')

titulo.textContent = 'Rosely Nutricionista'

var pacientes = document.querySelectorAll('.paciente')

for (var i = 0; i < pacientes.length; i++) { // pecorrendo a lista e paciente
  console.log(pacientes[i])

  var paciente = pacientes[i]

  var tdPeso = paciente.querySelector('.info-peso')
  var peso = tdPeso.textContent

  var tdAltura = paciente.querySelector('.info-altura')
  var altura = tdAltura.textContent

  var tdImc = paciente.querySelector('.info-imc')

  var pesoEValido = true
  var alturaEValido = true

  if (peso <= 0 || peso >= 1000) {
    console.log('Peso invalido!')
    tdPeso.textContent = 'Peso invalido!'
    pesoEValido = false
    paciente.classList.add("paciente-invalido")
  }

  if (altura <= 0 || altura >= 3.0) {
    console.log('Peso invalido!')
    tdAltura.textContent = 'Altura invalida!'
    alturaEValido = false
    paciente.classList.add("paciente-invalido")

  }

  if (pesoEValido && alturaEValido) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc
  } else {
    tdImc.textContent = 'Altura e/ou Peso inválidos'
  }
}

function calculaImc(peso,altura) {
  var imc = 0;
  imc = peso / (altura * altura) // formula do IMC

  return imc.toFixed(2);
}