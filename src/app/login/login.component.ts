import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    loginForm = this.formBuilder.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',Validators.required] 
    });

  constructor(private formBuilder:FormBuilder, private router:Router) {

  }

  iniciarSesion()
  {
    if (this.loginForm.valid)
    {
if (this.loginForm.controls["email"].value=="codigoazuladmin@gmail.com" 
&& this.loginForm.controls["password"].value=="codigoazuladmin")
{
this.router.navigateByUrl("dashboardAdmin")
}
else if (this.loginForm.controls["email"].value=="codigoazulgen@gmail.com" 
&& this.loginForm.controls["password"].value=="codigoazulgen")
{
this.router.navigateByUrl("dashboard-gen")
}
else {
  const loginError = document.getElementById('login-error') as HTMLElement;
  loginError.classList.remove('d-none'); 
}
} else {
}
} }

