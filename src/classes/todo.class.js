export class Todo {
    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.done = false;
        this.create = new Date();  
    }
}