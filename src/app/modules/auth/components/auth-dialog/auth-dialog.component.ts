import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AuthDto} from "../../models/auth.dto";
import {AuthService} from "../../services/auth.service";
import {RegisterDialogComponent} from "../register-dialog/register-dialog.component";

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
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

  closeDialog() {
    this._dialogRef.close();
  }

  openDialogSighUp() {
    this._dialogRef.close();
    this._dialog.open(RegisterDialogComponent);
  }
}
