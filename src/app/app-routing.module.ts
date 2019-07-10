import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'rooms', loadChildren: './chat/rooms/rooms.module#RoomsPageModule' },
  { path: 'private', loadChildren: './chat/private/private.module#PrivatePageModule' },
  { path: 'chatroom', loadChildren: './chat/chatroom/chatroom.module#ChatroomPageModule' },
  { path: 'approve', loadChildren: './auth/approve/approve.module#ApprovePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
