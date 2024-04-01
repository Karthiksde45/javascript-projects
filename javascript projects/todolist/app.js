let button = document.getElementById('add')
let todoList = document.getElementById('todolist')
let input = document.getElementById('input')
let todos = [];
window.onload = ()=>{
    todos = JSON.parse(localStorage.getItem('todos'))
    todos.forEach(todo=>addtodo(todo))
}
buttton.addEventListener('click' , ()=>{
    todos.push(input.value)
    localStorage.setItem('todos', JSON.stringify(todos))
    addtodo(input.value)
    input.value=''
})
function addtodo(todo){
    let para = document.createElement('p')
    para.innerText = todo;
    todoList.appendChild(pare)
    para.addEventListener('click' ,()=>{
    para.style.textDecoration = 'line-through'
    removeEventListener(todo)
    })
    para.addEventListener('dblclick' , ()=>{
        todoList.removeChild(para)
        removeEventListener(todo)
    })
        function remove(todo){
            let index = todos.indexOf(index)
            if(index > -1){
                todos.splice(index,1);
            }
            localStorage.setItem('todos',JSON.stringfy(todos))
        }
    