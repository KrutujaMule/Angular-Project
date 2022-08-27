import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginUser } from '../services/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login(username: string, pass: string) {
    sessionStorage.setItem('password', pass);
    sessionStorage.setItem('username', username);
    this.router.navigateByUrl('/dashboard').then(() => {
      window.location.reload();
      // console.log('setItem');
    });


  }
  loginModel=new loginUser('','');

  constructor(private router: Router) {}

  
  ngOnInit(): void {}
  async userLogin(user:any){

  }
}
