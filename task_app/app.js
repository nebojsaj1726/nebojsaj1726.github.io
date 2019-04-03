
const taskButton = document.querySelector('#bt1');
const clearButton = document.querySelector('#bt2');
const searchInput = document.querySelector('#searchTab');
const allTasks = document.querySelector('#list');

function getTasks() {
    const allTasks = document.querySelector('#list');
    allTasks.innerHTML = localStorage.getItem('task');  
}

function addTask() {
    const taskInput = document.querySelector('#input1');
    if (taskInput.value === '') {
        alert('You have to write some task!');
    } else {
        const allTasks = document.querySelector('#list');
        allTasks.innerHTML += `<li class="taskItem">` + taskInput.value + `<i class="fa fa-close deleteTask"></i></li>`
        store();
        taskInput.value = null;
    }
}

function removeAllTasks() {
    const allTasks = document.querySelector('#list');
    let listItems = allTasks.getElementsByTagName('li');
    if (confirm('Are you sure that you want to delete all your tasks?')) {
        localStorage.clear();
        while (listItems.length > 0) {
            allTasks.removeChild(listItems[0]);
        }
    }
}

function removeTask(e) {
    let item = e.target.parentNode;
    if (item.classList.contains('taskItem') && confirm('Are you sure that you want to delete task?')) {
        item.parentNode.removeChild(item);
    }
    store();
}

function store() {
    localStorage.setItem('task', allTasks.innerHTML); 
}

function filterTasks(filterInput) {
    const text = filterInput.target.value.toLowerCase();
    document.querySelectorAll('.taskItem').forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) !== -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', getTasks);
taskButton.addEventListener('click', addTask);
clearButton.addEventListener('click', removeAllTasks);
allTasks.addEventListener('click', removeTask);
searchInput.addEventListener('keyup', filterTasks);