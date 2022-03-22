import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { first, last } from 'rxjs/operators';
import { AuthService } from 'src/app/data-services/auth.service';
import { ChatService, Message } from 'src/app/data-services/chat.service';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { object } from 'firebase-functions/lib/providers/storage';
import { MainNavComponent } from 'src/app/main-nav/main-nav.component';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {


  

  constructor(
    private dialog: MatDialog,
    private _authService: AuthService,
    public _chatService: ChatService,
    public chat: ChatComponentContent,
  ) {
  }



  ngOnInit(): void {
    this.chat.deleteMessageAfter2Hours();
    this.chat.scrollToBottom();
    window.scrollTo(0,document.body.scrollHeight);

  }


  openChat() {
    this.dialog.open(ChatComponentContent);
    this.chat.deleteMessageAfter2Hours();
    this.chat.scrollToBottom();
  }

}



@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content/chat-content.component.html',
  styleUrls: ['./chat-content/chat-content.component.scss'],
  providers: [MainNavComponent]
})
export class ChatComponentContent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked, AfterContentInit {
  @ViewChild('newMessage') inputName; // accessing the reference element
  messageInput: FormGroup;
  allMessages: Observable<Message>;
  
  
  constructor(
    public _chatService: ChatService,
    public _authService: AuthService,
  ) {
    this.allMessages = this._chatService.getMessages();
  }
  ngAfterContentInit(): void {
    this.scrollToBottom();
  }
  ngAfterContentChecked(): void {
    // this.scrollToBottom();
  }
  ngAfterViewChecked(): void {
    // this.scrollToBottom();
  }
  ngAfterViewInit(): void {
    this.scrollToBottom();
  }


  @ViewChild('scrollMe', { static: true }) private myScrollContainer: ElementRef;


  public hour: number;
  public minutes: Number;
  public newMessage: string;
  // public email: string;
  ngOnInit(): void {
    // this._authService.getCurrentUser().subscribe(user => {
    //   this.email = user.email;
    // })
    this.scrollToBottom();
    this._chatService.ngOnInit();
    window.scrollTo(0,document.body.scrollHeight);
    let objDiv = document.getElementById('messagesBox');
    objDiv.scrollTop = objDiv.scrollHeight;
    
   // this.deleteMessageAfter2Hours();
  }
  


  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
}


  sendMessage(message: string) {
    if(message != ''){
    this._chatService.sendMessage(message);
    this.inputName.nativeElement.value = '';
    }
    return;
  }


  deleteMessageAfter2Hours(){
    this._chatService.getMessages().pipe().subscribe(async allMessages =>{
      let currentTime = Date.now();

      let allMessagesTimes = [];
      let allIds = [];

      for(let y = 0; y<allMessages.length-1; y++){
        allMessagesTimes.push(allMessages[y].timeCheck + (1) * 60 * 60 * 1000);
        allIds.push(allMessages[y].id);
      }

      for(let i = 0; i<allMessages.length-1; i++){
        if(allMessagesTimes[i]<= currentTime){
          await this._chatService.chatDatabase.database.ref('/messages/').child(allIds[i]).remove(); //this function deletes content inside allIds 
        }
      }

    }); 
  }





}
