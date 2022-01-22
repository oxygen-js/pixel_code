import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from '@angular/common';

import {RegisterDialogComponent} from './components/register-dialog/register-dialog.component';
import {AuthDialogComponent} from "./components/auth-dialog/auth-dialog.component";
import { ResetPasswordDialogComponent } from './components/reset-password-dialog/reset-password-dialog.component';


@NgModule({
  declarations: [
    AuthDialogComponent,
    RegisterDialogComponent,
    ResetPasswordDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [],
  exports: [
    AuthDialogComponent
  ]
})
export class AuthModule {
}
