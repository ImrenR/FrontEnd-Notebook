//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");

const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);

//Functions
const addTodo = (e) => {
  //Prevent form from submitting
  e.preventDefault();
  //* TODO div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo"); //* todoDiv added on appjs not on html
  //* Create Li
  const newTodo = document.createElement("li");
  newTodo.innerText = "hey";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //* check mark button
  const completedButton = document.createElement("button");
 completedButton.innerHTML = "<i class='fas fa-checked'></i>";
  completedButton.classList.add("completed-btn");
  todoDiv.appendChild(completedButton)
   //* check trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class='fas fa-trash'></i>";
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton)
  //* Append to list
  todoList.appendChild(todoDiv)
};

//. 25dk dakika
