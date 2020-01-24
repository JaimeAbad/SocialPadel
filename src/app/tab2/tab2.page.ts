import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router, private authSvc: AuthService, private afAuth: AngularFireAuth) {}


  onLogout(){
    console.log('Logout!');
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }
}
