import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = new User();
  constructor(private router: Router, private authSvc: AuthService) { }

  ngOnInit() {}

  async onLogin(){
    const user = await this.authSvc.onLogin(this.user);
    if (user) {
      console.log('Successfully login in!');
      // redirige a la carpeta raiz una vez logeados
      this.router.navigateByUrl('/')
    }
  }
}
