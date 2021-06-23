import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todoList:Todo[]=[];
  newTodo:string="";
  constructor() { }

  ngOnInit(): void {
    this.todoList=[
      {
        content:'Type your Todos in the box',
        isCompleted:false
      },
      {
        content:'Click on add todo button',
        isCompleted:false
      },
      {
        content:'Click on the todo to strike it',
        isCompleted:false
      },
      {
        content:'Click on the striked todo to un-strike it',
        isCompleted:true
      },
      {
        content:'Click on delete button to remove todo',
        isCompleted:false
      }
    ];
  }
  addTodo(){
    if(this.newTodo=="")return;
    this.todoList.push({
      content:this.newTodo,
      isCompleted:false
    });
    this.newTodo="";
  }

  changeState(id:number){
    this.todoList.map((v,i)=>{
      if(i==id)v.isCompleted=!v.isCompleted;
      return v;
    });
  }

  deleteItem(id:number){
    this.todoList=this.todoList.filter((v,i)=>id!=i);
  }

}
