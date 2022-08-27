import { Component, OnInit } from '@angular/core';
import { signUpUser } from '../services/users';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  router: any;
signUp(fullname:string, email:string,mobilenumber:number,password:string,agree:true){
  sessionStorage.setItem('fullname','Alex');
  sessionStorage.setItem('email','');
  sessionStorage.setItem('mobilenumber','');
  sessionStorage.setItem('password','');
  sessionStorage.setItem('agree','true');
  this.router.navigateByUrl('/login').then(()=>{
    window.location.reload();
  });

}
signUpModel=new signUpUser('','','' ,'',true);
  onSubmit(){
      console.log(this.signUpModel)
     }

  constructor() { }

  ngOnInit(): void {
  }
}
