import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

export interface Idea {
  desc: string,
  title: string,
  starTime: string
}

@Injectable({
  providedIn: 'root'
})
export class IdeaService {
  private partido: Observable<any>;

  constructor(private database: AngularFireDatabase){
    this.partido = this.database.list('eventos').valueChanges();
  }

  getPartidos(){
    return this.partido;
  }

}
