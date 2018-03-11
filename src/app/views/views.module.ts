import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

import { TopNavComponent } from './top-nav/top-nav.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { ReadmePageComponent } from './readme-page/readme-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [],
  declarations: [
    TopNavComponent,
    FooterNavComponent,
    ReadmePageComponent
  ],
  entryComponents: [],
  exports: [
    TopNavComponent,
    FooterNavComponent,
    ReadmePageComponent
  ]
})
export class ViewsModule {
}
