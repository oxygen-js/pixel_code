import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-reset-password-dialog',
  templateUrl: './reset-password-dialog.component.html',
  styleUrls: ['./reset-password-dialog.component.scss'],
  providers: [AuthService]
})
export class ResetPasswordDialogComponent implements OnInit {

  email: string = "";

  constructor(
    private _dialog: MatDialog,
    private _authService: AuthService,
    private _dialogRef: MatDialogRef<ResetPasswordDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  reset(): void {
    this._authService.resetPassword(this.email);
  }

  closeDialog(): void {
    this._dialogRef.close();
  }


}
