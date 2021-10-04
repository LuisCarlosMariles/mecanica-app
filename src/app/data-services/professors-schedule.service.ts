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
  
  //Ana María Castañeda (1)
  cubicle1(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('cubicles/cubicle1/weekday').snapshotChanges();
  }
  cubicle1Classes(){ 
    return this.firestore.collection('cubicles/cubicle1/assignatures').snapshotChanges();
  }
  cubicle1Description(){
    return this.firestore.collection('cubicles/cubicle1/description').snapshotChanges();
  }

  // Cubículo vacante (2)
  cubicle2(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('cubicles/cubicle2/weekday').snapshotChanges();
  }
  cubicle2Classes(){
    return this.firestore.collection('cubicles/cubicle2/assignatures').snapshotChanges();
  }
  cubicle2Description(){
    return this.firestore.collection('cubicles/cubicle2/description').snapshotChanges();
  }
//-------------------------

  // Cubículo vacante (3)
  cubicle3(){ 
    return this.firestore.collection('cubicles/cubicle3/weekday').snapshotChanges();
  }
  cubicle3Classes(){
    return this.firestore.collection('cubicles/cubicle3/assignatures').snapshotChanges();
  }
  cubicle3Description(){ 
    return this.firestore.collection('cubicles/cubicle3/description').snapshotChanges();
  }
  //--------------------------------

  // Dr. Álvaro Gonzalez Álvarez (4)
  cubicle4(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('cubicles/cubicle4/weekday').snapshotChanges();
  }
  cubicle4Classes(){
    return this.firestore.collection('cubicles/cubicle4/assignatures').snapshotChanges();
  }
  cubicle4Description(){ 
    return this.firestore.collection('cubicles/cubicle4/description').snapshotChanges();
  }
//----------------------------------------------
// Rigoberto Zamora (5)
  cubicle5(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('cubicles/cubicle5/weekday').snapshotChanges();
  }
  cubicle5Classes(){
    return this.firestore.collection('cubicles/cubicle5/assignatures').snapshotChanges();
  }
  cubicle5Description(){ 
    return this.firestore.collection('cubicles/cubicle5/description').snapshotChanges();
  }
  //---------------------------
  // Arili Cárdenas (6)
  cubicle6(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('cubicles/cubicle6/weekday').snapshotChanges();
  }
  cubicle6Classes(){
    return this.firestore.collection('cubicles/cubicle6/assignatures').snapshotChanges();
  }
  cubicle6Description(){ 
    return this.firestore.collection('cubicles/cubicle6/description').snapshotChanges();
  }

  //--------------------------------------------------------
  // Fernando Lara (7)
  cubicle7(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('cubicles/cubicle7/weekday').snapshotChanges();
  }
  cubicle7Classes(){
    return this.firestore.collection('cubicles/cubicle7/assignatures').snapshotChanges();
  }
  cubicle7Description(){ 
    return this.firestore.collection('cubicles/cubicle7/description').snapshotChanges();
  }
  //--------------------------------------------------------
  // Israel Sauceda (8)
  cubicle8(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('cubicles/cubicle8/weekday').snapshotChanges();
  }
  cubicle8Classes(){
    return this.firestore.collection('cubicles/cubicle8/assignatures').snapshotChanges();
  }
  cubicle8Description(){ 
    return this.firestore.collection('cubicles/cubicle8/description').snapshotChanges();
  }
  //----------------------------------------------------------------------------------
  // Eddna Martínez (9) 
  cubicle9(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('cubicles/cubicle9/weekday').snapshotChanges();
  }
  cubicle9Classes(){
    return this.firestore.collection('cubicles/cubicle9/assignatures').snapshotChanges();
  }
  cubicle9Description(){ 
    return this.firestore.collection('cubicles/cubicle9/description').snapshotChanges();
  }
  //----------------------------------------------------------------------------------
  // Vacante arriba en medio planta baja (10)
  cubicle10(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('cubicles/cubicle10/weekday').snapshotChanges();
  }
  cubicle10Classes(){
    return this.firestore.collection('cubicles/cubicle10/assignatures').snapshotChanges();
  }
  cubicle10Description(){ 
    return this.firestore.collection('cubicles/cubicle10/description').snapshotChanges();
  }
  //----------------------------------------------------------------------------------
  // Juan Raúl Alcántara (11)
  cubicle11(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('cubicles/cubicle11/weekday').snapshotChanges();
  }
  cubicle11Classes(){
    return this.firestore.collection('cubicles/cubicle11/assignatures').snapshotChanges();
  }
  cubicle11Description(){ 
    return this.firestore.collection('cubicles/cubicle11/description').snapshotChanges();
  }
  //----------------------------------------------------------------------------------
  // Miguel Ángel Martínez (12)
  cubicle12(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('cubicles/cubicle12/weekday').snapshotChanges();
  }
  cubicle12Classes(){
    return this.firestore.collection('cubicles/cubicle12/assignatures').snapshotChanges();
  }
  cubicle12Description(){ 
    return this.firestore.collection('cubicles/cubicle12/description').snapshotChanges();
  }
  //----------------------------------//----------------------------------
  // Asistente de laboratorio (13)
  cubicle13(){ // method to bring data specific cubicle data (all week from that cubicle) from firebase
    return this.firestore.collection('cubicles/cubicle13/weekday').snapshotChanges();
  }
  cubicle13Classes(){
    return this.firestore.collection('cubicles/cubicle13/assignatures').snapshotChanges();
  }
  cubicle13Description(){ 
    return this.firestore.collection('cubicles/cubicle13/description').snapshotChanges();
  }
  //----------------------------------//----------------------------------

  test(){ // metodo para listar todos los estudiantes
    return this.firestore.collection('professorsSchedule').snapshotChanges();
    // return this.firestore.collectionGroup('Ana María').snapshotChanges)
  }
}
