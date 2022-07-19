import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/Models/AllModels.Models';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @ViewChild('fileInput') fileInput:any;

  title = 'EMPProject';

  employeeFrom: FormGroup; 

  employees: Employee[];
  employeesToDisplay:Employee[];

  educationOption =[
    '10th pass',
    'graduate',
    'diploma',
    'post graduate',
    'PhD'
  ];


  constructor (private fb: FormBuilder,private employeeService: LoginServiceService){
    this.employeeFrom = fb.group({});
    this.employees =[];
    this.employeesToDisplay = this.employees;
  }

ngOnInit(): void {
  this.employeeFrom = this.fb.group({
    firstname:this.fb.control(''),
    lastname:this.fb.control(''),
    birthday:this.fb.control(''),
    gender: this.fb.control(''),
    education:this.fb.control('default'),
    company: this.fb.control(''),
    jobExperience: this.fb.control(''),
    salary:this.fb.control(''),
  });

  this.employeeService.getEmployees().subscribe(res =>{
    console.log(res);
  },
   )
}

addEmployee(){
  let employee: Employee = {
    firstname:this.FirstName.value,

    lastname:this.Lastname.value,
    birthdate:this.Birthday.value,
    gender:this.Gender.value,
    education:this.educationOption[parseInt(this.Education.value)],
    company:this.Company.value,
    jobExperience:this.jobExperience.value,
    salary:this.Salary.value,
    profile:this.fileInput.nativeElemnt.files[0]?.name,
  }
  
  this.employeeService.postEmployee(employee).subscribe((res) => {
     this.employees.unshift(res);
    this.clearForm();
  },
  );
}


clearForm() {
  this.FirstName.setValue('');
  this.Lastname.setValue('');
  this.Birthday.setValue('');
  this.Gender.setValue('');
  this.Education.setValue('');
  this.Company.setValue('');
  this.jobExperience.setValue('');
  this.Salary.setValue('');
  this.fileInput.nativeElemnt.value = '';
}

public get FirstName(): FormControl{
  return this.employeeFrom.get('firstname') as FormControl;

}

public get Lastname(): FormControl{
  return this.employeeFrom.get('lastname') as FormControl;

}

public get Birthday(): FormControl{
  return this.employeeFrom.get('birthday') as FormControl;

}

public get Gender(): FormControl{
  return this.employeeFrom.get('gender') as FormControl;

}

public get Education(): FormControl{
  return this.employeeFrom.get('education') as FormControl;

}

public get Company(): FormControl{
  return this.employeeFrom.get('company') as FormControl;

}

public get jobExperience(): FormControl{
  return this.employeeFrom.get('jobExperience') as FormControl;

}

public get Salary(): FormControl{
  return this.employeeFrom.get('salary') as FormControl;

}

}
