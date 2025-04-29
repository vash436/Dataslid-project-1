const input= document.getElementById("todo-input");
const todos= document.getElementById("todos");
const todobtn= document.getElementById("add-btn");
const mytodos=[]
let id=0;

function createHtmlElement() {
    todos.innerHTML="";

    mytodos.forEach((todo, index) => {
        const newli = document.createElement('li')
        newli.textContent = todo.title;
        todos.appendChild(newli)
    })}
    for (let index = 0;index < mytodos.length;index++)
    

function addTodo(){
    console.log(typeofinput.value)
    if(input.value.trim().length==0){
        alert("You haven't written anything ")
        return
    }
    id++
    const newtodo = {
        title: input.value,
        iscompleted: false,
        id: id
    }
    mytodos.push(newtodo)
    input.value=""
    createHtmlElement()
     
    console.log(mytodos)
}
    todobtn.addEventListener('click,addTodo')
