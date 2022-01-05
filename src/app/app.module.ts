import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {provideAuth, getAuth} from '@angular/fire/auth';
import {provideDatabase, getDatabase} from '@angular/fire/database';
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {environment} from 'src/environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {EXPORT_MODULES} from "./modules/export.module";
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire/compat";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    EXPORT_MODULES,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
