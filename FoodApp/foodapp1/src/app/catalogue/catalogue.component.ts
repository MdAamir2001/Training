// catalogue.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {
  selectedFood: number | null = null;

  foodItems = [
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 5 },
    { id: 3, name: 'Desserts', price: 20 },
    { id: 4, name: 'Mojitos', price: 12 },
  ];

  handleFoodClick(id: number) {
    this.selectedFood = id;
    alert("Food added");
  }
}
