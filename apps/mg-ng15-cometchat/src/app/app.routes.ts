import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'chat',
    pathMatch: 'full',
    loadChildren: () =>
      import('@mg-ng15-cometchat/chat').then((m) => m.ChatModule),
  },
];
