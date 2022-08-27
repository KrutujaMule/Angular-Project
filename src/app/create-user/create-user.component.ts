import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { createUser } from '../services/users';
import { CreateService } from '../services/create.service';

// export interface NewData{
//   firstname:string;
//   middlename:string;
//   lastname:string;
//   email:string;
//   phonenumber:number;
//   dob:number;
// }

@Component({
  selector: 'app-create-page',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  // userModel=new test('','','','',true);

   myForm: FormGroup=new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    middlename: new FormControl(' '),
    lastname: new FormControl(' '),
    email: new FormControl(' '),
    phonenumber: new FormControl(' '),
    dob: new FormControl('2000-01-01'),
  });

  users:createUser[]=[{
    firstname:"",
    middlename:"",
     lastname:"",
     email:"",
   phonenumber:"",
   dob:""
  }];

  onSubmit(value:any){
    console.log("submit called");
    // console.log(value);
    // console.log(this.myForm);
    this.createService.createUser(value).subscribe((res)=>{
      console.log("Added Successfully")

    })
     this.createService.getCreatedUsers().subscribe((data:any)=>{
      this.users= data;
    })
  }

  constructor(private fb: FormBuilder,private http:HttpClient,public createService:CreateService) {

  }
  ngOnInit(): void {
    this.myForm=new FormGroup({
      firstname: new FormControl(' '),
      middlename:new FormControl(' '),
      lastname: new FormControl(' '),
      email: new FormControl(' '),
      phonenumber: new FormControl(' '),
      dob: new FormControl('2000-01-01'),
    })

    this.myForm.valueChanges.subscribe(console.log);
  }
}


