import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HomeComponent } from './home/home.component';
import { OrderDetailsComponent } from './orderdetails/orderdetails.component';

const routes: Routes = [{ path: '', component: HomeComponent }, 

{ path: 'CustomerDetails', component: CustomerComponent },

{ path: 'Catalogue', component: CatalogueComponent },

{ path:'orderdetails',component:OrderDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeComponents=[HomeComponent,CustomerComponent,CatalogueComponent,OrderDetailsComponent]
