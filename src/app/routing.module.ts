import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadmePageComponent } from './views/readme-page/readme-page.component';

//import { AuthGuard } from './core/auth.guard';
//import { CoreModule } from './core/core.module';

const routes: Routes = [
  { path: '', component: ReadmePageComponent },
  //{ path: 'login', component: UserLoginComponent },
  //{ path: 'items', component: ItemsListComponent, canActivate: [AuthGuard] },
  //{ path: 'notes', component: NotesListComponent,  canActivate: [AuthGuard] },
  //// uploads are lazy loaded
  //{ path: 'uploads', loadChildren: './uploads/shared/upload.module#UploadModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  //providers: [AuthGuard],
})
export class RoutingModule {
}
