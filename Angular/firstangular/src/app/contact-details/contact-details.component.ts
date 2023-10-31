import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {
  firstName:string="unknown"; //initialize to dummy values

  lastName:string="unknown"; //initialize to dummy values

  age:number=22; //initialize to dummy values

  email:string="unknown"; //initialize to dummy values

  phoneNumber:number=0; //initialize to dummy values

  joinStatus:boolean=true;

  location:string="chennai";
  color:string="violet";
  size:number=1;
  styleClassName:string="bstyle";
  constructor(){
    console.log("Component is created");
  }
  ngOnInit(){
    this.firstName='Md'; //initialize to actual values

    this.lastName='Aamir';  //initialize to actual values
  
    this.age=22; //initialize to actual values
  
    this.email='arunabhilash0@gamil.com'; //initialize to actual values
  
    this.phoneNumber=1234567890; //initialize to actual values
  
    console.log("Contact details intialized");
  }

  ngOnChanges(){
    console.log("Contact details updated");
  }

  ngOnCheck(){
    console.log("Contact details verified");
  }
  ngOnDestroy(){
    console.log("Contact details destroyed");
  }

}
