import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {RouterModule} from "@angular/router";
import {MatDialogModule} from "@angular/material/dialog";
import { InvertPipe } from './pipes/invert.pipe';
import { HeaderIsAuthComponent } from './components/header/header-is-auth/header-is-auth.component';
import { HeaderNotAuthComponent } from './components/header/header-not-auth/header-not-auth.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InvertPipe,
    HeaderIsAuthComponent,
    HeaderNotAuthComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule
  ]
})
export class SharedModule {
}
