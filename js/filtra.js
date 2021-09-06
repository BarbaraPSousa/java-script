var campoFiltro = document.querySelector('#filtra-tabela')

campoFiltro.addEventListener('input', function () {
  var pacientes = document.querySelectorAll('.paciente')
  if (this.value.length > 0) {
    for (var i = 0; i < pacientes.length; i++) { // esconde a lista no filtro
      var paciente = pacientes[i]
      var tdNome = paciente.querySelector('.info-nome')
      var nome = tdNome.textContent
      if (nome != this.value) {
        paciente.classList.add('invisivel')
      } else {
        paciente.classList.remove('invisivel')
      }
    }
  } else {
    for (var i = 0; i < pacientes.length; i++) { //devolver a lista
      var paciente = pacientes[i]
      paciente.classList.remove('invisivel')
    }
  }
})
