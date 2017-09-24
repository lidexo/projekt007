import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoListService} from "../todo-list.service";

@Component({
  selector: 'todo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  private title: string = '';
 // @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor(private todoService: TodoListService) {
  }

  ngOnInit() {
  }

  changeTitle(newTitle: string): void {
    console.log('info z inputa: ' + newTitle);
    this.todoService.addItem(newTitle);
  }

  generateTitle(): string {
    return "tytuł z metody";
  }

}
