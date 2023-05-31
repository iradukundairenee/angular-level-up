import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: string[] = [];
  newItem: any;

  addItem(newItem: string) {
    // Add the new item to the array
    this.items.push(newItem);

    // Clear the input field after adding the item
    this.newItem = '';
  }
}
