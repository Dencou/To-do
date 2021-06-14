import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  task = ``
  tasksList=[]
  remembered=[]
  completed = []
  constructor() { }

  ngOnInit(): void {
    console.log(this.task)
  }

  saveTask(){
    if(this.task.trim()==``)return;
    if(this.tasksList.includes(this.task.trim())) return;
    this.tasksList.unshift(this.task)
    this.task = ``
  }

  deleteTask(index){
    this.tasksList = this.tasksList.filter((item,idx) => idx != index)
    console.log(":asd")
  }
  
  rememberTask(task,index){
    this.tasksList = this.tasksList.filter((item,idx) => idx != index)
    if(this.remembered.includes(task.trim())) return;
    this.remembered.unshift(task)
  }
  removeRemember(index){
    this.remembered = this.remembered.filter((item,idx) => idx != index)
  }

  rememberCompleted(remember,index){
    this.remembered = this.remembered.filter((item, idx) => idx != index)
    if(this.completed.includes(remember)) return;
    this.completed.unshift(remember)
    console.log(remember)
  }


  // clearear el array recibiendo el nombre de la variable dinamicamente

  clear(nombrevariable:string){
    if(this[nombrevariable]== undefined) throw Error(`No existe el array ${nombrevariable} en this`);
    this[nombrevariable]=[]
    
  }




}
