export class TodoListService {
  private todoList = [
    {title: 'instal NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy spp'}
  ];

  constructor() {
  }

  getTodoList() {
    return this.todoList;
  }

  addItem(title: string) {
    this.todoList.push({title});
    console.log(this.todoList);
  }
}
