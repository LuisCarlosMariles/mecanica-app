import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ScheduleMapService {

  constructor(public firestore: AngularFirestore) { }

  classroom1(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('classrooms/cienciasMateriales/weekday').snapshotChanges();
  }

  classroom1Test(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('classrooms/cienciasMateriales/classes').snapshotChanges();
  }
}
