import { Component } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { NavController, AlertController } from '@ionic/angular';
import { map } from "rxjs/operators";


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tasksRef: AngularFireList<any>;
  tasks: Observable<any[]>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public database: AngularFireDatabase){

    this.tasksRef = this.database.list('eventos');
    this.tasks = this.tasksRef.snapshotChanges().pipe(
    map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }));
  }

  deleteTarea(){
    this.tasksRef.remove( 'key' );
  }






}
