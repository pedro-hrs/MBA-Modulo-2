import { Component } from '@angular/core';
import { TodoItem } from './todoItem';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks: TodoItem[] = []

  addTask(descriptionTask: string){
    if(!!descriptionTask){
      this.tasks.push({
        description: descriptionTask,
        done: false
      })
    }else{
      alert('Insira uma descrição')
    }
  }
  
  deleteTask(i: number){
    this.tasks.splice(i, 1)
  }
}
