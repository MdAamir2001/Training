import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [{'path':'Employees',component:EmployeeListComponent},
                        {'path':'Departments',component:DepartmentListComponent},
                        {'path':'*',component:ErrorComponentComponent},
                        {'path':'Home',component:HomeComponent},
                        {'path':'',redirectTo:'/Home',pathMatch:'full'},
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponent=[EmployeeListComponent,DepartmentListComponent,ErrorComponentComponent,HomeComponent]
