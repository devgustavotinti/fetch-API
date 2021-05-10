const inputCep = document.getElementById('cep')
const btnCep = document.querySelector('#btnCep')
const resultadoCep = document.querySelector('.resultadoCep')


btnCep.addEventListener('click', handleClick)

function handleClick(event) {
  event.preventDefault()
  const cep = inputCep.value
  buscaCep(cep)
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.json())
  .then(body => {
    console.log(body)
    resultadoCep.innerHTML = 
    `
    <table width="90%" border="1px">
    <thead>
      <tr>
        <td colspan="6">Resultado da busca</td>
      </tr>

      <tr>
        <td width="15%">CEP</td>
        <td width="10%">DDD</td>
        <td width="10%">UF</td>
        <td width="15%">Localidade</td>
        <td width="20%">Bairro</td>
        <td width="25%">Logradouro</td>
      </tr>
    </thead>
  
    <tbody>
      <tr>
        <td>${body.cep}</td>
        <td>${body.ddd}</td>
        <td>${body.uf}</td>
        <td>${body.localidade}</td>
        <td>${body.bairro}</td>
        <td>${body.logradouro}</td>
      </tr>
    </tbody>
  </table>
    `
 
  })
}