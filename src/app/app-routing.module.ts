import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},{path:'login',component:LoginComponent},{path:'create',component:CreateUserComponent},{path:'',component:LoginComponent},{path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
