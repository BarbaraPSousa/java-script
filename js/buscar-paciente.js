https: var botaoAdicionar = document.querySelector('#buscar-pacientes')

botaoAdicionar.addEventListener('click', function () {
  var xhr = new XMLHttpRequest() // reponsavel por trazer requisição

  xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')
  xhr.addEventListener('load', function () {
    var erroAjax = document.querySelector("#erro-ajax")

    if (xhr.status == 200) {
      erroAjax.classList.add("invisivel")
      var resposta = xhr.responseText // string de paciente
      var pacientes = JSON.parse(resposta) // tranforma string em Array

      pacientes.forEach(function (paciente) {
        //monta a tabela com as informações passadas
        addPacienteNaTabela(paciente)
      })
    } else {
      console.log(xhr.status)
      console.log(xhr.responseText)
      erroAjax.classList.remove("invisivel")
    }
  })
  xhr.send()
})
