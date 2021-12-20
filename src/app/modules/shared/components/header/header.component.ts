import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AuthComponent} from "../../../auth/components/auth/auth.component";

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
    this._dialog.open(AuthComponent);
  }
}
