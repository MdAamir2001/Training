import { Component } from '@angular/core';
import {EmpManagementService} from './EmpManagementService';
import { ProjectMgtServiceService } from './project-mgt-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProjectMgtServiceService]
})
export class AppComponent {
  title = 'structureddata';

    constructor(private PmMgtSvc: ProjectMgtServiceService){

    }
    emplist=[
      {empId:1,firstName:"pavan", lastName:"reddy",age:30},
      {empId:2,firstName:"arun",lastName:"kumar",age:45},
      {empId:3,firstName:"bhargav",lastName:"valuuri",age:69}
    ];

    // addEmp(){
    //   this.emplist[2]=this.emp;
    //   alert("Data added successfully");
    // }
  
    emp={empId:4,firstName:"sangeet",lastName:"baruah",age:22,};

     empvc: EmpManagementService =new EmpManagementService();

    addEmp(){
      this.empvc.addEmp(this.emp,this.emplist)

    }

    addProject(){
      this.PmMgtSvc.addProjects();

    }
    forLoops(){
      for(let i in this.emplist)
      console.log(i+ "\t"+this.emplist[i].firstName,this.emplist[i].lastName);

      for (let i of this.emplist)
      console.log(i.empId+","+i.firstName)
    }
}
