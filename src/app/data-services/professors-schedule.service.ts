import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorsScheduleService {

  constructor(public firestore: AngularFirestore
  ) { }

  getTeacherSchedule(): Observable<any>{ // metodo para listar todos los estudiantes
    return this.firestore.collection('teachersSchedule').snapshotChanges();
  }

  cubicle1(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('cubicles/cubicle1/weekday').snapshotChanges();
  }

  cubicle2(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('cubicles/cubicle2/weekday').snapshotChanges();
  }

  cubicle3(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('cubicles/cubicle3/weekday').snapshotChanges();
  }

  cubicle4(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('cubicles/cubicle4/weekday').snapshotChanges();
  }

  cubicle5(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('cubicles/cubicle5/weekday').snapshotChanges();
  }

  cubicle6(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('cubicles/cubicle6/weekday').snapshotChanges();
  }

  cubicle7(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('cubicles/cubicle7/weekday').snapshotChanges();
  }

  cubicle8(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('cubicles/cubicle8/weekday').snapshotChanges();
  }


  test(){ // metodo para listar todos los estudiantes
    return this.firestore.collection('professorsSchedule').snapshotChanges();
    // return this.firestore.collectionGroup('Ana María').snapshotChanges)
  }
}
