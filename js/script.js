let board = document.getElementById('board');
let buttonAdd = document.getElementById('add');
let inputAdd = document.getElementById('novaTarefa');
let listaTarefas = [];
if(localStorage.getItem('listaTarefas')){
  listaTarefas = JSON.parse(localStorage.getItem('listaTarefas'));
}else{
  localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));
}

localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas));
mostrarNaTela(listaTarefas);

// stringify Convierte un array en JSON, parse convierte JSON en array

buttonAdd.onclick = function (){
  let valorDigitado = inputAdd.value;
  listaTarefas.push(valorDigitado);

  let tarefa = document.createElement('div');
  tarefa.setAttribute('class', 'tarefa');
  
  let titulo = document.createElement('div');
  titulo.setAttribute('class', 'col-md-8');
  titulo.textContent = valorDigitado;

  let buttonCheck = document.createElement('div');
  buttonCheck.setAttribute('class', 'col-md-2');

  let imgCheck = document.createElement('img');
  imgCheck.setAttribute('class', 'icon');
  imgCheck.setAttribute('src', 'img/checklist.png');

  buttonCheck.appendChild(imgCheck);

  tarefa.appendChild(titulo);
  tarefa.appendChild(buttonCheck);

  board.appendChild(tarefa);

  localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas))
}

function mostrarNaTela(listaTarefas){
  for(let item of listaTarefas){
    gerarTarefa(item);
  }
}

// Para cada item da listaTarefas preciso executar a funcao gerarTarefa
// Es el equivalente al foreach, pero invertido

function gerarTarefa(valorDigitado){
  let tarefa = document.createElement('div');
  tarefa.setAttribute('class', 'tarefa');
  
  let titulo = document.createElement('div');
  titulo.setAttribute('class', 'col-md-8');
  titulo.textContent = valorDigitado;

  let buttonCheck = document.createElement('div');
  buttonCheck.setAttribute('class', 'col-md-2');

  let imgCheck = document.createElement('img');
  imgCheck.setAttribute('class', 'icon');
  imgCheck.setAttribute('src', 'img/checklist.png');

  buttonCheck.appendChild(imgCheck);

  tarefa.appendChild(titulo);
  tarefa.appendChild(buttonCheck);

  board.appendChild(tarefa);
}

// let board = document.querySelector('#board') Para chamar pelo query selector