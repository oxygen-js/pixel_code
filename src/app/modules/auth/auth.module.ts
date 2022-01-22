import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from '@angular/common';

import {RegisterDialogComponent} from './components/register-dialog/register-dialog.component';
import {AuthDialogComponent} from "./components/auth-dialog/auth-dialog.component";
import { ResetPasswordDialogComponent } from './components/reset-password-dialog/reset-password-dialog.component';
import { AuthErrorComponent } from './components/auth-error/auth-error.component';


@NgModule({
  declarations: [
    AuthDialogComponent,
    RegisterDialogComponent,
    ResetPasswordDialogComponent,
    AuthErrorComponent,
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
