import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthDto} from "../../models/auth.dto";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AuthDialogComponent} from "../auth-dialog/auth-dialog.component";
import {AuthService} from "../../services/auth.service";
import {RegisterDto} from "../../models/register.dto";

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent implements OnInit {

  loginForm: RegisterDto = {
    email: "",
    password: "",
    confirmPassword: ""
  }

  constructor(
    private _dialog: MatDialog,
    private _dialogRef: MatDialogRef<RegisterDialogComponent>,
    private _authDialog: AuthService,
    private _authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  openDialogSignIn() {
    this._dialogRef.close();
    this._dialog.open(AuthDialogComponent);
  }

  closeDialog() {
    this._dialogRef.close();
  }

  signUp() {
    this._authService.signUp(this.loginForm.email, this.loginForm.password)
      .then(res => console.log("Register component \"res\" - ", res))
      .catch(error => console.error("Register component \"error\" - ", error));
  }
}
