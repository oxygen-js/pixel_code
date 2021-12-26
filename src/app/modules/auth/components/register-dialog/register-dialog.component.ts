import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AuthDialogComponent} from "../auth-dialog/auth-dialog.component";
import {AuthService} from "../../services/auth.service";
import {RegisterDto} from "../../models/register.dto";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import firebase from "firebase/compat";

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss'],
  providers: [AuthService]
})
export class RegisterDialogComponent implements OnInit, OnDestroy {

  private _destroyed$ = new Subject();

  error: firebase.FirebaseError | null = null;
  loginForm: RegisterDto = {
    email: "",
    password: "",
    confirmPassword: ""
  };

  constructor(
    private _dialog: MatDialog,
    private _dialogRef: MatDialogRef<RegisterDialogComponent>,
    private _authDialog: AuthService,
    private _authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this._authService.errorSub$.pipe(
      takeUntil(this._destroyed$)
    ).subscribe(error => this.error = error);
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  openDialogSignIn(): void {
    this._dialogRef.close();
    this._dialog.open(AuthDialogComponent);
  }

  closeDialog(): void {
    this._dialogRef.close();
  }

  signUp(): void {
    this._authService.signUp(this.loginForm);
  }
}
