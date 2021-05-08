import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudyRoomService {

  constructor(
    public peopleNumberDatabase: AngularFireDatabase,
  ) { }

  peopleNumber: unknown[];

  peopleInRoom(): Observable<any>{
    return this.peopleNumberDatabase.list('people').valueChanges();
  }

  showPeople(){
    this.peopleInRoom().subscribe(
      data => {
        return data;
        // data.map((e: any) => {
        //   return {
        //     number: e.payload.doc.data().number,
        //   }
        }
  //   )
    );
// }
  }
}
 