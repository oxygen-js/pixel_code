import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {RegisterDialogComponent} from "../register-dialog/register-dialog.component";
import { ResetPasswordDialogComponent } from '../reset-password-dialog/reset-password-dialog.component';
import {AuthService} from "../../services/auth/auth.service";
import {ComponentStore} from "@ngrx/component-store";
import {concatMap, switchMap, withLatestFrom} from "rxjs/operators";
import {of} from "rxjs";
import firebase from "firebase/compat";

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss'],
  providers: [AuthService, ComponentStore]
})
export class AuthDialogComponent implements OnInit {

  readonly email$ = this._componentStore.select(state => state.email);
  readonly password$ = this._componentStore.select(state => state.password);
  readonly error$ = this._componentStore.select(state => state.error);

  readonly setEmail = this._componentStore.updater((state, email: string) => ({
    ...state,
    email
  }));

  readonly setPassword = this._componentStore.updater((state, password: string) => ({
    ...state,
    password
  }));

  readonly setError = this._componentStore.updater((state, error: any) => ({
    ...state,
    error: error
  }));

  ngOnInit(): void {
    this._componentStore.setState({
      email: "",
      password: "",
      error: null
    });
  }

  readonly signIn = this._componentStore.effect(action$ => action$.pipe(
    concatMap(() =>
      of(action$).pipe(
        withLatestFrom( this.email$, this.password$ )
      )
    ),
    switchMap(([, email, password]) => {
      return this._authService
        .signIn(email, password)
        .catch(e => this.setError(e))
    })
  ));

  closeDialog(): void {
    this._dialogRef.close();
  }

  resetPassword():void {
    this._dialogRef.close();
    this._dialog.open(ResetPasswordDialogComponent);
  }

  openDialogSighUp(): void {
    this._dialogRef.close();
    this._dialog.open(RegisterDialogComponent);
  }

  inputEmail(event: any) {
    this.setEmail(event.target.value)
  }

  inputPassword(event: any) {
    this.setPassword(event.target.value)
  }

  constructor(
    private _dialog: MatDialog,
    private _authService: AuthService,
    private _dialogRef: MatDialogRef<AuthDialogComponent>,
    private _componentStore: ComponentStore<AuthDialogComponentStore>
  ) {
  }
}

interface AuthDialogComponentStore {
  email: string,
  password: string,
  error: firebase.FirebaseError | null
}
