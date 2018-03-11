import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { ViewsModule } from "./views/views.module";
import { BookService } from "./services/book.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ViewsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Fuerteventura project'),
    AngularFireDatabaseModule
  ],
  providers: [BookService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {
}
