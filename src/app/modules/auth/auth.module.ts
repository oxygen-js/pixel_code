import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from '@angular/common';
import {RegisterDialogComponent} from './components/register-dialog/register-dialog.component';
import {AuthDialogComponent} from "./components/auth-dialog/auth-dialog.component";


@NgModule({
  declarations: [
    AuthDialogComponent,
    RegisterDialogComponent,
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
