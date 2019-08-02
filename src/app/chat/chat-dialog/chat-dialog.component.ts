import { Component, OnInit } from '@angular/core';
import {ChatService,Message} from '../../chat.service';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/scan';
// import 'rxjs/Rx';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;

  constructor(public _chatService:ChatService) { }

  ngOnInit() {

    this.messages = this._chatService.conversation.asObservable()
    .pipe(
        scan((acc, val) => acc.concat(val) )
        )
  }
  sendMessage() {
    this._chatService.converse(this.formValue);
    this.formValue = '';
  }
}
