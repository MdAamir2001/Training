import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class CustomerComponent {
  orderdetails = new FormGroup({
    pizza: new FormControl('', [Validators.required, Validators.minLength(5)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    email: new FormControl('', Validators.email),
  }, {
    updateOn: 'blur'
  });

  onSubmit() {
    alert("Submitted...");
  }
}
