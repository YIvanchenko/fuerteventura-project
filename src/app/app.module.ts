import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { ViewsModule } from "./views/views.module";
import { BookService } from "./services/book.service";
import { SecurityService } from './services/security.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ViewsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Fuerteventura project')
  ],
  providers: [
    { provide: BookService, useClass: BookService },
    AngularFirestore,
    SecurityService,
    AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule {
}
