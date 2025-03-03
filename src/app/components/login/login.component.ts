import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../../styles.css']
})
export class LoginComponent {

  loginObj : any = {
    email: '',
    password: ''
  }

  router = inject(Router);

  onSignIn(){
    if(this.loginObj.email == 'admin@gmail.com' && this.loginObj.password == '0000'){
      this.router.navigateByUrl('/home');
      // localStorage.setItem('empERPUser', this.loginObj.email );
    }else{
      alert("Wrong credentials!");
    }
  }


}
