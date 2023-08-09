import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChatComponent } from './chat/chat.component';

import { CometChatUsersWithMessages } from '@cometchat/chat-uikit-angular';

import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ChatComponent }]),
    CometChatUsersWithMessages,
  ],
  declarations: [ChatComponent],
})
export class ChatModule {}
