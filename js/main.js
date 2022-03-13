const elBtn = document.getElementById('btn');
const elInput = document.getElementById('form__input');
const elForm = document.querySelector("form");
const elList = document.getElementById('toDoList');

let inputValue ='';


elInput.addEventListener('keyup', (e)=>{
  inputValue = e.target.value;
})


elForm.addEventListener('submit', (e)=>{
  e.preventDefault();

  let li = document.createElement("li");
  li.className = 'list__item';
  li.appendChild(document.createTextNode(inputValue));

  elList.appendChild(li);

  let removeBtn = document.createElement("button");
  removeBtn.className = "remove-btn";
  removeBtn.innerText = "X";
  li.appendChild(removeBtn);


   elRemove = document.querySelectorAll(".remove-btn"); 

   for(let i=0; i<elRemove.length; i++){
     elRemove[i].addEventListener("click",buttonRemove)
   }
   function buttonRemove(e){
     let c = e.target;
     c.parentNode.remove();
   }

  elInput.value ='';
});


