import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<b style="text-align: center;">Welcome to the first angular app</b>
  <div style="text-align: center; font-size: 18;">
    <b> Welcome MR</b> {{firstName}} {{lastName}}<br>
    <b>Date of Joinig</b> {{startDate}}<br>
    <b>location</b> {{location}}<br>
  
  </div>
  <router-outlet></router-outlet>`,
  styles: [`b{color:red;font-size:25}`]
})
export class AppComponent {
  title = 'First Angular';
  firstName= 'Md';
  lastName= 'Aamir';
  location= 'Chennai';
  startDate= new Date();

}
