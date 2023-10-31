import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routeComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule ,FormsModule,FormGroup} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    routeComponents,
    
  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,FormGroup
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
