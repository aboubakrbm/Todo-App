'use strict';

let checkboxContainers = document.getElementsByClassName('checkbox');
let checkbox = document.querySelectorAll('input[type="checkbox"]');

for(let i = 0; i<checkbox.length;i++){
  checkbox[i].addEventListener("change", function(){
    console.log("done")

    if(checkbox[i].checked==false){
      checkboxContainers[i].style.backgroundImage = "url('images/icon-check.svg')";
      console.log("done")
    }

  })
}
let add = document.getElementById('add');
add.addEventListener("click", function(){
  document.getElementById('added').value = "hello";
  
  console.log("done")

})


let toggleMode = document.getElementById('toggle');
toggleMode.addEventListener("click", _ =>{
   if(toggleMode.getAttribute("src") == "images/icon-sun.svg"){
    toggleMode.setAttribute("src", "images/icon-moon.svg");
    document.getElementsByClassName("todo-head")[0].style.backgroundImage = 'url("images/bg-mobile-light.jpg")';
    document.getElementsByClassName("todo-input")[0].style.backgroundColor = 'hsl(0, 0%, 98%)';
    document.getElementsByClassName("text")[0].style.backgroundColor = 'hsl(0, 0%, 98%)';
    document.getElementsByClassName("text")[1].style.backgroundColor = 'hsl(0, 0%, 98%)';
    document.getElementsByClassName("task")[0].style.backgroundColor = 'hsl(0, 0%, 98%)';
    let end_list = document.getElementsByClassName("end-list")[0];
    end_list.style.backgroundColor = 'hsl(0, 0%, 98%)';
    document.getElementsByClassName("footer")[0].style.backgroundColor = 'hsl(0, 0%, 98%)';
    document.body.style.backgroundColor = "hsl(236, 33%, 92%)"
    document.getElementById('h1').classList.toggle("h1-light");
    end_list.classList.toggle("end-list-light") 
  }else{
    toggleMode.setAttribute("src", "images/icon-sun.svg");
    document.getElementsByClassName("todo-head")[0].style.backgroundImage = 'url("images/bg-mobile-dark.jpg")';
    document.body.style.backgroundColor = "hsl(235, 21%, 11%)"
    document.getElementsByClassName("todo-input")[0].style.backgroundColor = 'hsl(235, 21%, 11%)';
    document.getElementsByClassName("text")[0].style.backgroundColor = 'hsl(235, 21%, 11%)';
    document.getElementsByClassName("text")[1].style.backgroundColor = 'hsl(235, 21%, 11%)';
    document.getElementsByClassName("task")[0].style.backgroundColor = 'hsl(235, 21%, 11%)';
    document.getElementsByClassName("end-list")[0].style.backgroundColor = 'hsl(235, 21%, 11%)';
    document.getElementsByClassName("footer")[0].style.backgroundColor = 'hsl(235, 21%, 11%)';
  }
})