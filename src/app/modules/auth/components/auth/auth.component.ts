import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {AuthDto} from "../../models/auth.dto";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginForm: AuthDto = {
    login: "",
    password: ""
  }

  constructor(
    private _dialogRef: MatDialogRef<AuthComponent>,
  ) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this._dialogRef.close();
  }
}
