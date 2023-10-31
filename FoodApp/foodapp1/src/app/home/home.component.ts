import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   playsound(){
    let audio = new Audio();
    audio.src = "../assets/always-with-me-always-with-you-piano-long-21257.mp3";
    audio.load();
    audio.play();
   }
  
  }
  

