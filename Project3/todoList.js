// Selecetors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
//! In JavaScript, variables declared with const or let are not hoisted like function declarations.

// Functions
function addTodo(e) {
  // Prevent form from submitting
  e.preventDefault();

  //* Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Append to List
  todoList.appendChild(todoDiv);

  //Clear todo input value
  todoInput.value = "";
}

function deleteCheck(a) {
  const item = a.target;
  // DELETE TODO

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement; // goes one level up in the DOM
    // Animation
    todo.classList.add("fall");
    todo.addEventListener('transitionend', function(){
      todo.remove();
    })
  }

  //Check mark
   if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement; // goes one level up in the DOM
    todo.classList.toggle('completed'); // If the element does NOT have the completed class → add it.
  }
}
