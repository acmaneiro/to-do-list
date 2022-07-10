import './styles.css';
import { ToDoList, Todo  } from './classes/index';
import { createTodoHtml } from './js/componentes';

const todos = [];
export const todoList = new ToDoList();

const tarea = new Todo('aprender javascript');
const tarea2 = new Todo('comprar un unicornio');
todoList.newTodo(tarea);
todoList.newTodo(tarea2);
console.log({todoList})

tarea.done = true;
createTodoHtml(tarea);

createTodoHtml(tarea2);