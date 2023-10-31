import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  emplist: any=[{empId:'100',firstName:'Md', lastName:'Aamir' },
        {empId:'101',firstName:'Arun',lastName:'abhiash'},
        {empId:'',firstName:'',lastName:''}
      ];

}
