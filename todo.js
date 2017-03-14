var todos = [
    {todo: 'CS 429 Assignment', done: false, index: 1},
    {todo: 'Tuesday Trip', done: false, index: 2},
    {todo: 'Dominion Game Night', done: false, index: 3}
];

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
    const todotext = document.createElement('p');
    todotext.textContent = todo.todo;
    todotext.className = "todo-text";
    const del = document.createElement('a');
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

hello();
