import { Component } from '@angular/core';


 

@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent {

  title = 'angularpipes';

  firstName:string="Black";

  lastName:string="Pearl";

  joinDate:any=new Date();
  currency:number=500;
  currencysymbol:string="INR";

  salary:number=20000;

 

 

}


