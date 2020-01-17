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

inputAdd.onkeypress = function(event){
  if (event.key == "Enter") {
  let valorDigitado = inputAdd.value;
  listaTarefas.push(valorDigitado);

  gerarTarefa(valorDigitado, listaTarefas.length - 1); // Incluyo en la función de click la tarea creada

  localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas))
  inputAdd.value = "" // para dejar el input vacío después de dar enter
  }
}

buttonAdd.onclick = function (event){
  let valorDigitado = inputAdd.value;
  listaTarefas.push(valorDigitado);

  gerarTarefa(valorDigitado, listaTarefas.length - 1); // Incluyo en la función de click la tarea creada

  localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas))
  inputAdd.value = "" // para dejar el input vacío después de dar click
}

//Todo click genera un objeto que es un evento. Ese evento viene con la propiedad (método) target que agarra el elemento que estás clicando

function mostrarNaTela(listaTarefas){
  // for(let item of listaTarefas){
  //   gerarTarefa(item);
  // }
  board.innerHTML = "" // Limpia todos los elementos en el site y deja para renderizar todas las tareas de nuevo
  listaTarefas.forEach(function(valor, posicao){ //El manda primero el valor y luego la posición del foreach
    gerarTarefa(valor, posicao)
  })
}

// Para cada item da listaTarefas preciso executar a funcao gerarTarefa
// Es el equivalente al foreach, pero invertido

function gerarTarefa(valorDigitado, posicao){
  let tarefa = document.createElement('div');
  tarefa.setAttribute('class', 'tarefa');
  tarefa.setAttribute('position', posicao); // Genero un atributo de posición para cada tarea
  
  let titulo = document.createElement('div');
  titulo.setAttribute('class', 'col-md-8');
  titulo.textContent = valorDigitado;

  let buttonCheck = document.createElement('div');
  buttonCheck.setAttribute('class', 'col-md-2');

  let imgCheck = document.createElement('img');
  imgCheck.setAttribute('class', 'icon');
  imgCheck.setAttribute('src', 'img/checklist.png');

  buttonCheck.appendChild(imgCheck);

  imgCheck.onclick = function(event){
    // let tarefaPai = event.target.parentNode.parentNode;
    // tarefaPai.remove();
    console.log(listaTarefas)

    let posicaoTarefa = tarefa.getAttribute('position')
    listaTarefas = listaTarefas.filter(function(valor, posicao){ // Agarro el valor de la listaTarefas, la renombro con el método filter y establezco la condición de desigualdad
      return posicao != posicaoTarefa // Devuelve la posición nueva que no sea igual a la posición de listaTarefas inicial
    })
    mostrarNaTela(listaTarefas)
    localStorage.setItem("listaTarefas", JSON.stringify(listaTarefas)); // Guarda el array actualizado cuando actualizas pantalla
    tarefa.remove(); // So uma linha
  }

  tarefa.appendChild(titulo);
  tarefa.appendChild(buttonCheck);

  board.appendChild(tarefa);
}

// let board = document.querySelector('#board') Para chamar pelo query selector