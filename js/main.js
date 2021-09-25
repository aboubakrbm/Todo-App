//Selectors
const todoInput = document.querySelector(".text");
const todoButton = document.querySelector(".input-button");
const todoList = document.querySelector(".todo-list");
const todoActive = document.querySelector("#active");
const todoCompleted = document.querySelector("#completed");
const todoAll = document.querySelector("#all");
let itemLeft = document.querySelectorAll(".item-left");
const nothingTodo = document.querySelector(".nothing-to-do");
const clearAllCompletedButton = document.querySelector(".clear-all-completed");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoButton.addEventListener("click", emptyTodoList);
todoList.addEventListener("click", todoDelete);
todoActive.addEventListener("click", filterActive);
todoCompleted.addEventListener("click", filterCompleted);
todoAll.addEventListener("click", filterAll);
clearAllCompletedButton.addEventListener("click", clearAllCompleted);
clearAllCompletedButton.addEventListener("click", emptyTodoList);

//Functions
let itemNumber = 0;
function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault();

  if (todoInput.value.length > 0) {
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
    //Create label
    const newTodo = document.createElement("label");
    newTodo.setAttribute("for", completeButton.id);
    newTodo.innerHTML =
      '<div class="fake-checkbox-wrapper"><div class="fake-checkbox"><img class="check-mark" src="images/icon-check.svg" alt="check mark icon"/></div></div>' +
      // newTodo.innerText = todoInput.value;
      todoInput.value;
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
  } else {
    console.log("empty input");
  }
}

function todoDelete(e) {
  const item = e.target;
  if (item.classList[0] === "delete") {
    const trash = item.parentElement;
    //animation
    trash.classList.add("fall");
    trash.addEventListener("transitionend", function () {
      this.remove();
      emptyTodoList();
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

todoList.addEventListener("click", (e) => {
  const item = e.target;
  if (item.classList[0] == "checkbox") {
    if (item.checked) {
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
});

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
  if (
    itemLeft[1].textContent.trim() == "0" &&
    todoList.childNodes.length == 0
  ) {
    nothingTodo.style.display = "flex";
  } else {
    nothingTodo.style.display = "none";
  }
}

emptyTodoList();

function clearAllCompleted(e) {
  const item = e.target;
  if (item.classList[0] === "clear-all-completed") {
    console.log(todoList.childNodes.length);
    let deletnumbers = new Array();
    let i = 0;
    while (i < todoList.childNodes.length) {
      if (todoList.childNodes[i].childNodes[0].checked) {
        todoList.childNodes[i].remove();
      }
      if (todoList.childNodes[i].childNodes[0].checked === false) {
        i++;
      }
    }
  }
}
