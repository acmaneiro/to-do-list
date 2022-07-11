import { Todo } from "../classes";
import { todoList } from "../index";

const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnDeleteDone = document.querySelector('.clear-completed');
const filters = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');
const filtersFooter = document.querySelector('.footer');
export const ocultarFiltros = () => {
    filtersFooter.classList.add('hidden');
}

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
        filtersFooter.classList.remove('hidden');
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

btnDeleteDone.addEventListener('click', (event) => {
    todoList.deleteTodoDone();
    console.log(todoList);

    for (let i=divTodoList.children.length-1; i>=0; i--){
        const elem = divTodoList.children[i];
        if (elem.classList.contains('completed')){
            divTodoList.removeChild( elem );
        }
    }
})

filters.addEventListener('click', event => {
    const filtro = event.target.text;

    anchorFiltros.forEach( elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');
    if(filtro){
        for (const element of divTodoList.children){
            element.classList.remove('hidden');
            const done = element.classList.contains('completed');
            switch (filtro) {
                case 'Pendientes':
                    if(done){
                        element.classList.add('hidden');
                    }
                    break;
                case 'Completados':
                    if (!done){
                        element.classList.add('hidden');
                    }
                    break;
                default:
                    break;
            }  
        }
    }
})