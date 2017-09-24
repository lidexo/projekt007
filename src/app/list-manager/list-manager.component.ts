import {Component, OnInit} from '@angular/core';
import {TodoListService} from "../todo-list.service";

@Component({
  selector: 'todo-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  title = 'todo test1';
  userLoggedIn = true;
  todoList = [];

  constructor(private todoListService:TodoListService) {
  }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  // addItem(title: string) {
  //   this.todoListService.addItem(title);
  // }

}
