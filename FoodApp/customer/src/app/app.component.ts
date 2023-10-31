import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  customerDetails: any[] = [];
  formErrors: any = {};

  validateForm(): boolean {
    let isValid = true;
    this.formErrors = {};

    if (!this.formData.firstName.trim()) {
      this.formErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!this.formData.lastName.trim()) {
      this.formErrors.lastName = 'Last name is required';
      isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(this.formData.email)) {
      this.formErrors.email = 'Invalid email address';
      isValid = false;
    }

    const phonePattern = /^\d{10}$/;

    if (!phonePattern.test(this.formData.phone)) {
      this.formErrors.phone = 'Phone number must be 10 digits';
      isValid = false;
    }

    return isValid;
  }

  handleInputChange(event: any): void {
    const { name, value } = event.target;
    this.formData = { ...this.formData, [name]: value };
  }

  handleSubmit(event: any): void {
    event.preventDefault();

    if (this.validateForm()) {
      this.customerDetails.push({ ...this.formData });
      localStorage.setItem("customerdetails", JSON.stringify([...this.customerDetails]));
      console.log('data', this.customerDetails);
      window.alert('Details added');
    } else {
      window.alert('Form submission failed. Please check for errors.');
    }

    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    };
    this.formErrors = {};
  }

  handleReset(): void {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    };
    this.formErrors = {};
  }

  deleteContact(index: number): void {
    this.customerDetails.splice(index, 1);
  }
}
