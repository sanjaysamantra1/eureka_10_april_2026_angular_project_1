import { Observable } from 'rxjs';
import { TodoService } from './../../services/todo-service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  todos$: Observable<any> | undefined;
  todoService = inject(TodoService);

  ngOnInit() {
    this.todos$ = this.todoService.todoObs;
  }
  deleteTodo(id: any) {
    this.todoService.deleteToDo(id);
  }
}
