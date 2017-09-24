import {Injectable} from '@angular/core';

const storageName = "aah_todoList";

@Injectable()
export class TodoListStorageService {
  private todoList;

  constructor() {
    this.todoList = JSON.parse(localStorage.getItem(storageName));
  }

}
