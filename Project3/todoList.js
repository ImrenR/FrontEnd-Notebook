// Selecetors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteItem)
//! In JavaScript, variables declared with const or let are not hoisted like function declarations.
//! therefore if you are going to declare your function with const you need to place above at the bottom of the function
// Functions
function addTodo(e) {
  // Prevent form from submitting
  e.preventDefault();

//* Todo Div
  const todoDiv = document.createElement('div')
  todoDiv.classList.add('todo')

  // Create Li
  const newTodo = document.createElement("li")
  newTodo.classList.add("todo-item")
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo)
  // check mark button

  const completeButton = document.createElement("button")
  completeButton.innerHTML= '<i class="fas fa-check" ></i>'
  completeButton.classList.add("complete-btn")
  todoDiv.appendChild(completeButton)


// trash button

  const trashButton = document.createElement("button")
  trashButton.innerHTML= '<i class="fas fa-trash" ></i>'
  trashButton.classList.add("trash-btn")
  todoDiv.appendChild(trashButton)

//Append to List
todoList.appendChild(todoDiv)


//Clear todo input value
//! importance of this to delete what we wrote previously 
todoInput.value = "";

}

// DELETE TODO

function deleteItem(a){
  const item =a.target;
  if(item.classList[0] === "trash-btn"){
    const todo= item.parentElement;// goes one level up in the DOM (todoDiv)
    todo.remove();
  }
}








// Animation

//Check mark

//48:20
