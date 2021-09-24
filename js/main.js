//Selectors
const todoInput = document.querySelector(".text");
const todoButton = document.querySelector(".input-button");
const todoList = document.querySelector(".todo-list");
const todoActive = document.querySelector("#active");
const todoCompleted = document.querySelector("#completed");
const todoAll = document.querySelector("#all");
let itemLeft = document.querySelectorAll(".item-left");
const deleteCompletedButton = document.querySelector(".clear-completed");
const nothingTodo = document.querySelector(".nothing-to-do");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoButton.addEventListener("click", emptyTodoList);
todoList.addEventListener("click", todoDelete);
todoList.addEventListener("click", emptyTodoList);
todoActive.addEventListener("click", filterActive);
todoCompleted.addEventListener("click", filterCompleted);
todoAll.addEventListener("click", filterAll);

//Functions
let itemNumber = 0;
function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault();
  //Create todo item
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  todoDiv.classList.add("bar");
  //Check button
  const completeButton = document.createElement("input");
  completeButton.type = "checkbox";
  completeButton.id = Date.now();
  completeButton.classList.add("checkbox");
  todoDiv.appendChild(completeButton);
  //Create li
  const newTodo = document.createElement("label");
  newTodo.setAttribute("for", completeButton.id);
  newTodo.innerHTML =
    '<div class="fake-checkbox"><img class="check-mark" src="images/icon-check.svg" alt="check mark icon"/></div>' +
    todoInput.value;
  // newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-text");
  todoDiv.appendChild(newTodo);
  //Delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML =
    '<img id="delete" class="cross" src="images/icon-cross.svg" alt="delete todo icon"/>';
  deleteButton.classList.add("delete");
  todoDiv.appendChild(deleteButton);
  //Append todo item to list
  todoList.appendChild(todoDiv);
  //Clear todo input value
  todoInput.value = "";

  itemNumber++;
  for (let i = 0; i < itemLeft.length; i++) {
    itemLeft[i].innerHTML = itemNumber;
  }
  //whenever add newTodo all filter checked
  todoAll.checked = true;
}

function todoDelete(e) {
  const item = e.target;
  console.log(item);
  if (item.classList[0] === "delete") {
    const trash = item.parentElement;
    //animation
    trash.classList.add("fall");
    trash.addEventListener("transitionend", function () {
      this.remove();
    });
  }
  if (
    item.classList[0] === "delete" &&
    item.parentElement.childNodes[0].checked == false
  ) {
    itemNumber--;
    for (let i = 0; i < itemLeft.length; i++) {
      itemLeft[i].innerHTML = itemNumber;
    }
  }
}

todoList.addEventListener("click", subtractItemNumber);

function subtractItemNumber(e) {
  const item = e.target;
  if (item.classList[0] == "checkbox") {
    if (item.checked) {
      console.log("done");
      itemNumber--;
      for (let i = 0; i < itemLeft.length; i++) {
        itemLeft[i].innerHTML = itemNumber;
      }
    } else {
      itemNumber++;
      for (let i = 0; i < itemLeft.length; i++) {
        itemLeft[i].innerHTML = itemNumber;
      }
    }
  }
}

function filterCompleted() {
  const todos = todoList.childNodes;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].childNodes[0].checked == false) {
      todos[i].style.display = "none";
    } else todos[i].style.display = "flex";
  }
}

function filterActive() {
  const todos = todoList.childNodes;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].childNodes[0].checked) {
      todos[i].style.display = "none";
    } else todos[i].style.display = "flex";
  }
}

function filterAll() {
  const todos = todoList.childNodes;
  for (let i = 0; i < todos.length; i++) {
    todos[i].style.display = "flex";
  }
}

function emptyTodoList() {
  if (itemNumber == 0 && todoList.childNodes.length - 1 == 0) {
    nothingTodo.style.display = "flex";
  } else {
    nothingTodo.style.display = "none";
    console.log(todoList.childNodes.length);
  }
}

emptyTodoList();
