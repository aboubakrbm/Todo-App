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


