import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: firebase.User;

  constructor(
    private route: Router,
    private afAuth: AngularFireAuth,
    private authStore: AngularFirestore
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem("user", JSON.stringify(user));
        JSON.parse(<string>localStorage.getItem("user"));
      } else {
        localStorage.setItem("user", "");
        JSON.parse(<string>localStorage.getItem("user"));
      }
    })
  }

  // https://www.positronx.io/full-angular-7-firebase-authentication-system/
  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.route.navigate(['calc'])
      })
  }
}
