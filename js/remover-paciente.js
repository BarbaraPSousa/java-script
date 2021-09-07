var pacientes = document.querySelectorAll('.paciente')

var tabela = document.querySelector('table')

tabela.addEventListener('dblclick', function (event) {
  var resposta = prompt('Deseja Deletar?y/n')
  if (resposta == 'y') {
    event.target.parentNode.classList.add('fadeOut')
    setTimeout(function () {
      event.target.parentNode.remove()
    }, 500)
  }
})
