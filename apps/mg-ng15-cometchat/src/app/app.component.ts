import { Component, OnInit } from '@angular/core';
import { CometChat } from '@cometchat-pro/chat';
import { CometChatUIKit } from '@cometchat/chat-uikit-angular';
import { environment } from '../jank-env';

@Component({
  selector: 'mg-ng15-cometchat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  async ngOnInit() {
    const user = await CometChat.getLoggedinUser();
    if (!user) {
      //Login user
      try {
        const loginRes = await CometChatUIKit.login({
          uid: environment.USER_ID,
          authToken: environment.AUTH_KEY,
        });
        console.log('loginRes', loginRes);
      } catch (error) {
        console.log('error', error);
      }
    }
  }
}
