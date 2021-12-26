import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AuthDialogComponent} from "../../../auth/components/auth-dialog/auth-dialog.component";
// import {RegisterDialogComponent} from "../../../auth/components/register-dialog/register-dialog.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
  }

  openAuthDialog() {
    this._dialog.open(AuthDialogComponent);
  }

  openRegisterDialog() {
    this._dialog.open(RegisterDialogComponent);
  }
}
