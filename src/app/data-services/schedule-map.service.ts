import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ScheduleMapService {

  constructor(public firestore: AngularFirestore) { }


  cienciasMaterialesClassroom(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('classrooms/cienciasMateriales/classes').snapshotChanges();
  }

  mecanicaFluidosClassroom(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('classrooms/mecanicaFluidos/classes').snapshotChanges();
  }

  maquinasHerramientasClassroom(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('classrooms/maquinasHerramientas/classes').snapshotChanges();
  }

  salaAudiovisualClassroom(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('classrooms/salaAudiovisual/classes').snapshotChanges();
  }

  salaComputoClassroom(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('classrooms/salaComputo/classes').snapshotChanges();
  }
}
