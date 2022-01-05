import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AuthDto} from "../../models/auth.dto";
import {RegisterDialogComponent} from "../register-dialog/register-dialog.component";
import { ResetPasswordDialogComponent } from '../reset-password-dialog/reset-password-dialog.component';
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss'],
  providers: [AuthService]
})
export class AuthDialogComponent implements OnInit {

  loginForm: AuthDto = {
    email: "",
    password: ""
  }

  constructor(
    private _dialog: MatDialog,
    private _dialogRef: MatDialogRef<AuthDialogComponent>,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  auth(): void {
    this._authService.signIn(this.loginForm);
  }


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
}
