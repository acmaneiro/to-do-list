export class ToDoList {
    constructor(){
        this.loadTodosFromLocalStorage();
    }

    newTodo(todo){
        this.todos.push(todo);
        this.saveInLocalStorage();
    }

    deleteTodo(id){
        this.todos = this.todos.filter(todo => todo.id != id)
        this.saveInLocalStorage();
    }

    toggleTodo(id) {
        for (const todo of this.todos){
            if (todo.id == id){
                todo.done = !todo.done;
                this.saveInLocalStorage();
                break;
            }
        }

    }

    deleteTodoDone(){
        this.todos = this.todos.filter(todo => !todo.done)
        this.saveInLocalStorage();
    }

    saveInLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    loadTodosFromLocalStorage(){
         this.todos = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];
         console.log(this.todos);
    }
}