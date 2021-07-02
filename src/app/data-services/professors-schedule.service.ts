import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ProfessorScheduleTemplate } from '../views/professors-schedule/professors-schedule.component';

@Injectable({
  providedIn: 'root'
})
export class ProfessorsScheduleService {

  constructor(public firestore: AngularFirestore
  ) { }

  getTeacherSchedule(): Observable<any>{ // metodo para listar todos los estudiantes
    return this.firestore.collection('teachersSchedule').snapshotChanges();
  }

  professor1Data(){ // metodo para listar todos los estudiantes
    return this.firestore.collection('professorsSchedule/teacher1/weekDay').snapshotChanges();
    // return this.firestore.collectionGroup('Ana María').snapshotChanges)
  }

  professor2Data(){ // metodo para listar todos los estudiantes
    return this.firestore.collection('professorsSchedule/teacher2/weekDay').snapshotChanges();
    // return this.firestore.collectionGroup('Ana María').snapshotChanges)
  }

  test(){ // metodo para listar todos los estudiantes
    return this.firestore.collection('professorsSchedule').snapshotChanges();
    // return this.firestore.collectionGroup('Ana María').snapshotChanges)
  }
}
