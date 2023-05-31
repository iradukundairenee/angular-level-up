import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  newItem: string = '';
  @Output() onNewItem: EventEmitter<string> = new EventEmitter<string>();
  addItem() {
    if (this.newItem.trim() !== '') {
      this.onNewItem.emit(this.newItem);
      this.newItem = '';
    }
  }
  
}
