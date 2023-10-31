import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName:string="Unknown";
  lastName:string="Unknown";
  age:number=22;
  gender:string="male";
  favColor:string="blue";
  isEnabled:boolean=false;
  isDisplayed:boolean=false;
  YesNo:boolean=false;
  location:string="Jaipur";
  salary:number=15000;
  favTheme:string="theme3"
  title = 'databinding';
}
