const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');
// const time = document.getElementById('time');
// const date = document.getElementById('date');

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

function addTodo() {
 
    const todoText = input.value;

    if(todoText) {
        const todoEl = document.createElement("li");
        todoEl.innerText = todoText;

        todoEl.addEventListener("click", () =>{
            todoEl.classList.toggle("completed");
        });

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            todoEl.remove();
        });

        todos.appendChild(todoEl);

        input.value = "";

        updateLS();
    }
}

function updateLS() {
    const todosEL = document.querySelectorAll("li");

    const todos = [];

    todosEl.forEach((todoEl) => {
        todo.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed"),
        });
    });

    localStorage.setItem('todos',JSON.stringify(todos));
}