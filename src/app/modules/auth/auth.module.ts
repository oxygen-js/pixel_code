import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from '@angular/common';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {RegisterDialogComponent} from './components/register-dialog/register-dialog.component';
import {AuthDialogComponent} from "./components/auth-dialog/auth-dialog.component";
import {AngularFireAuth} from "@angular/fire/compat/auth";


@NgModule({
  declarations: [
    AuthDialogComponent,
    RegisterDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    AngularFirestore,
    AngularFireAuth
  ],
  exports: [
    AuthDialogComponent
  ]
})
export class AuthModule {
}
