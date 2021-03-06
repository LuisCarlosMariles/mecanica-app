import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(
    private firestore: AngularFirestore
  ) { }

   getUser(): Observable<any>{ // metodo para listar todos los estudiantes
    // console.log(this.firestore.collection('users').snapshotChanges().pipe(/*, map(element => element.map)*/    ));
    return this.firestore.collection('users', (ref) => ref.orderBy("email", "asc")).snapshotChanges();/*, map(element => element.map)    );              */                     //dile al tio que es lo que pasa cuando quitas .pipe(first())
  } //AL RETURN DE ARRIBA LE AGREGUE LO DE ORDERBY PARA TENER LA LISTA DE OBJETO ORDENADOS CON SU EMAIL EN FORMA ASCENDENTE

  // emails = [];
  // allUsers(){
  //   this.getUser().subscribe( data => {
  //   this.emails = data.map((e: any) => {
  //     console.log(e.payload.doc.data().email);
  //     return {
  //       email: e.payload.doc.data().email
  //     }
  //     })

  //   });
  //   }
  

  registerUser(firstName, lastName, email, major){ //metodo para crear usuario
    const user = {firstName, lastName, email, major}
    return this.firestore.collection('users').add(user)
                          .then((resp)=>{console.log('REGISTRED', resp);})
                          .catch((error)=>{console.log('EXISTE UN ERROR ', error)});
  }

  
  registerUserWithCUstomId(firstName, lastName, email, major){ //metodo para crear usuario
    const user = {firstName, lastName, email, major}
    return this.firestore.collection('users').doc(email).set(user);
  }
}
