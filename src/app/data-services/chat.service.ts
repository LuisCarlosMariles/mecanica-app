import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase, snapshotChanges  } from '@angular/fire/database';
import { Query } from '@google-cloud/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { AuthService } from './auth.service';


export interface Message{
  email: string,
  message: string;
  timeCheck: number,
  time: string;
  date: string;
  
}


@Injectable({
  providedIn: 'root'
})
export class ChatService implements OnInit{


  constructor(
    public chatDatabase: AngularFireDatabase,
    private _authService: AuthService,
  ) { }

  userEmail: string;

  ngOnInit(){
    this._authService.getCurrentUser().subscribe(
      user => {
        this.userEmail = user?.email;
      }
    );
    // console.log(this.userEmail); // commented but when chat box is opened it is supposed to show in console
  }


  getMessages(): Observable<any> {
    return this.chatDatabase.list<Message>('messages').valueChanges();
  }


  key: any;


  sendMessage(message: string){
    const currTime = Number(new Date());
    const now = Date.now();
    const readableTime = new Date(currTime).toLocaleTimeString();
    const readableDate = new Date(currTime).toDateString();
    const email = this.userEmail;

    let object = this.chatDatabase.list<Message>('messages').push({
      email: email,
      message,
      timeCheck: now,
      time: readableTime,
      date: readableDate,
    }).key;

    this.chatDatabase.database.ref('messages/'+object).child('id').set(object);


    

    this.chatDatabase.object('messages').update({'last_updated_at': currTime});

 

  }


}


