<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../services/idea.service';
=======
import { Component } from '@angular/core';
import * as firebase from 'firebase';
>>>>>>> master

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  // var database: firebase.database();
  listaPartidos =  [];

<<<<<<< HEAD
  constructor(private idea: IdeaService){}

  ngOnInit(){
    this.idea.getPartidos().subscribe(res => {
      this.listaPartidos = res;
      console.log(res);
    });
  }
=======
  constructor(){}

>>>>>>> master


}
