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

  var pesoEValido = validaPeso(peso);
  var alturaEValido = validaAltura(altura)

  if (!pesoEValido) {
    tdPeso.textContent = 'Peso invalido!'
    pesoEValido = false
    paciente.classList.add("paciente-invalido")
  }

  if (!alturaEValido) {
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

function validaPeso(peso) {
  if(peso > 0&& peso < 100){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura) {
  if(altura > 0 && altura <= 3.0){
    return true;
  }else {
    return false;
  }
}
