import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadmePageComponent } from './views/readme-page/readme-page.component';

import { SecurityGuard } from './services/security.guard';
import { UserLoginComponent } from './views/user-login/user-login.component';

const routes: Routes = [
  { path: '', component: ReadmePageComponent, canActivate: [SecurityGuard] },
  { path: 'login', component: UserLoginComponent }
  //{ path: 'items', component: ItemsListComponent, canActivate: [SecurityGuard] },
  //{ path: 'notes', component: NotesListComponent,  canActivate: [SecurityGuard] },
  //// uploads are lazy loaded
  //{ path: 'uploads', loadChildren: './uploads/shared/upload.module#UploadModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SecurityGuard],
})
export class RoutingModule {
}
