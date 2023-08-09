//add this in our main.ts file.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CometChatUIKit } from '@cometchat/chat-uikit-angular';
import { UIKitSettingsBuilder } from '@cometchat/uikit-shared';
import { AppModule } from './app/app.module';
import { environment } from './jank-env';

//create the builder
const uiKitSettings = new UIKitSettingsBuilder()
  .setAppId(environment.APP_ID)
  .setRegion(environment.REGION)
  .setAuthKey(environment.AUTH_KEY)
  .subscribePresenceForFriends()
  .build();

//Initialize CometChat
CometChatUIKit.init(uiKitSettings)?.then(() => {
  //load your root module
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
});
