let board = document.getElementById('board');
let buttonAdd = document.getElementById('add');

buttonAdd.onclick = function (){
  let tarefa = document.createElement('div');
  tarefa.setAttribute('class', 'tarefa');
  
  let titulo = document.createElement('div');
  titulo.setAttribute('class', 'col-md-8');
  titulo.textContent = "Essa é uma nova tarefa";

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