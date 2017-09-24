import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
private title : string='';
  constructor() { 
  }
  ngOnInit() {
  
  }

  changeTitle(newTitle:string): void {
    console.log (newTitle);
    this.title = newTitle;
  }
  generateTitle():string{
    return "tytuł z metody";
  }

}
