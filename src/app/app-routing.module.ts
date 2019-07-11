import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'rooms', canActivate: [AuthGuard], loadChildren: './chat/rooms/rooms.module#RoomsPageModule' },
  { path: 'private', canActivate: [AuthGuard], loadChildren: './chat/private/private.module#PrivatePageModule' },
  { path: 'chatroom', canActivate: [AuthGuard], loadChildren: './chat/chatroom/chatroom.module#ChatroomPageModule' },
  { path: 'approve', canActivate: [AuthGuard], loadChildren: './auth/approve/approve.module#ApprovePageModule' },
  { path: 'privatedetail/:id', loadChildren: './chat/privatedetail/privatedetail.module#PrivatedetailPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
