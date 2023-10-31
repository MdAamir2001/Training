import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  menuItems = [
    { name: 'Pizza', price: 10 },
    { name: 'Burger', price: 5 },
    { name: 'Salad', price: 8 }
  ];

  addToCart(cartItems) {
    alert("added succesfully");

    
  }
}
