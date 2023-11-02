// fetch('pessoas.json')
// .then(resposta => resposta.json())
// .then (json => jogaNatela(json));

axios('pessoas.json')
.then(response => jogaNatela(response.data));



function jogaNatela(json){

 const table = document.createElement('table');
  for (let objetoPessoas of json){
    const tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerHTML = objetoPessoas.nome;
    tr.appendChild(td);
    let td1 = document.createElement('td');
    td1.innerHTML = objetoPessoas.email;
    tr.appendChild(td1);
   let td2 = document.createElement('td');
    td2.innerHTML = objetoPessoas.cpf;
    tr.appendChild(td2);

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);

  
}