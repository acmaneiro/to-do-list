import { Todo } from "../classes";
import { todoList } from "../index";

const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

export const createTodoHtml = ( todo ) => {
    const htmlToDo = `
    <li class="${todo.done ? 'completed' :''}" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${todo.done ? 'checked': ''}>
							<label>${ todo.tarea}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li> `;
    const div = document.createElement('div');
    div.innerHTML = htmlToDo;
    divTodoList.append(div.firstElementChild);
    return div;
}

// Events

txtInput.addEventListener('keyup', ( event ) => {
    if (event.keyCode === 13 && txtInput.value.length > 0){
        const newTodo = new Todo(txtInput.value)
        todoList.newTodo(newTodo);
        createTodoHtml(newTodo);
        txtInput.value = '';
    }
})

divTodoList.addEventListener('click', (event) => {
    const elementName = event.target.localName;
    const todoElement = event.target.parentElement?.parentElement;
    const todoId = todoElement.getAttribute('data-id');

    if (elementName.includes('input')) {
        todoList.toggleTodo(todoId);
        todoElement.classList.toggle('completed');
    }else if (elementName.includes('button')){
        todoList.deleteTodo(todoId);
        divTodoList.removeChild( todoElement );
    }
    console.log(todoList);
});
