import './styles.css';
import { ToDoList, Todo  } from './classes/index';
import { createTodoHtml, ocultarFiltros } from './js/componentes';

const todos = [];

export const todoList = new ToDoList();

todoList.todos.forEach(createTodoHtml);
if (todoList.todos.length === 0) {
    ocultarFiltros();
}

