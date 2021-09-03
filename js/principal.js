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
    var imc = peso / (altura * altura) // formula do IMC
    tdImc.textContent = imc.toFixed(2)
  } else {
    tdImc.textContent = 'Altura e/ou Peso inválidos'
  }
}

//add novo paciente
var botaoAdicionar = document.querySelector("#adicionar-paciente");botaoAdicionar.addEventListener("click", function(){
  event.preventDefault();
  
  var form = document.querySelector("#form-adiciona")

  var nome = form.nome.value;
  var altura = form.addEventListener.value;
  var peso = form.peso.value;
  var gordura = form.gordura.value;

  var pacienteTr= document.createElement("tr");

  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = nome;
  alturaTd.textContent = altura;
  pesoTd.textContent = peso;
  gorduraTd.textContent = gordura;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  var tabebela = document.querySelector("#tabela-pacientes");
  tabebela.appendChild(pacienteTr);








} );
