 export class EmpManagementService{
    status:Boolean=false;
    // rec:any=null;
    addEmp(emp:any,emplist:any)
    {
        this.status=false;
        for(let i  in emplist)
        {
            console.log(i);
            if(emp.empId==emplist[i].empId)
            this.status=true;
        }
        if(this.status==true)
        {
            window.alert("This employee id already exists.. Try new one!!!");
        }
        else{
        emplist.push({empId:emp.empId,firstName:emp.firstName,lastName:emp.lastName,age:emp.age})
        alert("One employee!!!");
        }
    }
    deleteEmp(eId:any,emplist:any)
    {
        for(let i in emplist)
        {
            console.log(emplist[i].empId);
            if(eId==emplist[i].empId)
                emplist.splice(i,1);
        }
        alert("Employee data deleted")
    }
    updateEmp()
    {

    }
}