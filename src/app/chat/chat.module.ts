import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { FormsModule } from '@angular/forms';
import {ChatService} from '../chat.service';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: ChatDialogComponent,
  }
]

@NgModule({
  declarations: [ChatDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ ChatDialogComponent ,RouterModule], 
  providers: [ChatService]
})
export class ChatModule { }
