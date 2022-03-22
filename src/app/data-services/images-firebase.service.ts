import { Injectable } from '@angular/core';
import { AngularFireDatabase, snapshotChanges  } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesFirebaseService {

  constructor(
    public realTimeDatabase: AngularFireDatabase,
  ) { }

  getImages(): Observable<any> {
    return this.realTimeDatabase.list<string>('images').valueChanges();
  }
}
