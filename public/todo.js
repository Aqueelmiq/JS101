var todos = [];
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        todos = JSON.parse(this.responseText).todos;
        hello();
    }
};
const url = "localhost:3000/api/todos";
xmlhttp.open("GET", url, true)
xmlhttp.send();

var curr_index = 3;
const myTodos = document.getElementById('todos');

function hello() {

    for (var i=0; i<todos.length; i++) {
        addTodo(todos[i]);
    }
}

const input = document.getElementById('input');
const addbtn = document.getElementById('add');

addbtn.addEventListener('click', function () {
    const pp = input.value;
    console.log(pp);
    todos.unshift({todo: pp, done: false, index: ++curr_index});
    addTodo(todos[0]);
});

function addTodo(todo) {
    const li = document.createElement('li');
    li.index = todo.index;
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.className = "check";
    checkbox.addEventListener('change', function (event) {
        const text = event.target.nextSibling;
        if (event.target.checked) {
            text.style.textDecoration = 'line-through';
        } else {
            text.style.textDecoration = 'none';
        }
    });
    const todotext = document.createElement('p');
    todotext.textContent = todo.todo;
    todotext.className = "todo-text";
    const del = document.createElement('a');
    del.className = 'btn btn-danger text-white';
    del.addEventListener('click',delTodo);
    del.textContent = "delete";
    li.appendChild(checkbox);
    li.appendChild(todotext);
    li.appendChild(del);
    li.className = "todo";
    //myTodos.appendChild(li);
    myTodos.insertBefore(li, myTodos.firstChild);

}


function delTodo(event) {
    const par = event.target.parentNode;
    for(var i=0; i<todos.length; i++){
        if (todos[i].index == par.index) {
            todos.splice(i,1);
            break;
        }
    }
    console.log(todos);
    myTodos.removeChild(par);
}

