export class Todo {
    static fromJson( {tarea, id, done, create} ){
        const tempTodo = new Todo(tarea);
        tempTodo.id = id;
        tempTodo.done = done;
        tempTodo.create = create;
        
        return tempTodo;
    }

    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.done = false;
        this.create = new Date();  
    }
}