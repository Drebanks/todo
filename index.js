const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUl  = document.getElementById('todos');
// const time = document.getElementById('time');
// const date = document.getElementById('date');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
    todos.forEach(todo => {
        addTodo(todo)
    });
}

var date = new Date();
document.getElementById('date').innerHTML = date.toLocaleDateString();
var time = new Date();
document.getElementById('time').innerHTML = time.toLocaleTimeString();


// const date = new Date().toLocaleDateString("en-US", {
//     year: "numeric",
//     weekday: "long",
//     month: "short"

//     date.innerHTML = `${currentDate.toLocaleDateString}`
// });
// console.log(date);

// const time = new Date ().toLocaleDateString("en-US", {
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit"

// });
// console.log(time);
// time.innerHTML = time

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo();
});

function addTodo(todo) {
    let todoText = input.value;
    
    if (todo) {
        todoText = todo.text;
    }

    if(todoText) {
        const todoEl = document.createElement("li");
        if (todo && todo.completed){
            todo.El.classList.add("completed");
        }
        todoEl.innerText = todoText;

        todoEl.addEventListener("click", () =>{
            todoEl.classList.toggle("completed");
        
            updateLS();

        });

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            todoEl.remove();
        
            updateLS();


        });

        todosUl.appendChild(todoEl);

        input.value = "";

        updateLS();
    }
}

function updateLS() {
    const todosEl = document.querySelectorAll("li");

    const todos = [];

    todosEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed"),
        });
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}