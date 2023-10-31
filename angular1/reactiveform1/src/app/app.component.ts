import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveform1';
  protected submitted = false;

  frmGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    age: new FormControl(18,[Validators.min(18), Validators.max(60),Validators.required]),
    email: new FormControl('', [Validators.email])
  },

  {
    updateOn:'blur'
  });

  isCheckboxChecked = false;

  processData() {
    if (this.frmGroup.valid) {
      // Form is valid, process the data
      const formData = JSON.stringify(this.frmGroup.value);
      console.log(formData);
      this.isCheckboxChecked = true;
      if (this.isCheckboxChecked) {
        this.submitted=true;
      }
  
    } else {
      this.frmGroup.markAllAsTouched();
      alert("submitted")
  }
}
}
