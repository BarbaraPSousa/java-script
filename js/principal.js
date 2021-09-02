var titulo = document.querySelector('.titulo')

titulo.textContent = 'Rosely Nutricionista'

var paciente = document.querySelector('#primeiro-paciente')

var tdPeso = paciente.querySelector('.info-peso')
var tdAltura = paciente.querySelector('.info-altura')
var tdImc = paciente.querySelector('.info-imc')

var peso = tdPeso.textContent
var altura = tdAltura.textContent

var pesoEValido = true
var alturaEValido = true

if (peso <= 0 || peso >= 1000) {
  console.log("Peso invalido!");
  tdPeso.textContent = 'Peso invalido!'
  pesoEValido = false

}

if (altura <= 0 || altura >= 3.0) {
  console.log("Peso invalido!");
  tdAltura.textContent = 'Altura invalida!'
  alturaEValido = false

}

if (pesoEValido && alturaEValido) {
  var imc = peso / (altura * altura) // formula do IMC
  tdImc.textContent = imc
} else{
  tdImc.textContent = "Altura e/ou Peso inválidos";
}
