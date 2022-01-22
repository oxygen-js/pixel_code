import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import firebase from "firebase/compat";
import {getAuth} from 'firebase/auth';
import {BehaviorSubject} from "rxjs";
import {RegisterDto} from "../../models/register.dto";
import {AuthDto} from '../../models/auth.dto';

import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: "root"
})
export class AuthService {

  get isAuthorized(): boolean {
    return (getAuth().currentUser !== null);
  }

  errorSub$ = new BehaviorSubject(<firebase.FirebaseError>{
    code: "",
    name: 'FirebaseError',
    message: ""
  });

  userData: firebase.User | undefined;

  constructor(
    private route: Router,
    private afAuth: AngularFireAuth,
    private authStore: AngularFirestore
  ) {
  }

  signIn(auth: AuthDto) {
    return this.afAuth.signInWithEmailAndPassword(auth.email, auth.password)
      .then((result) => {
        this.route.navigate(['calc']);
        debugger;
      })
      .catch(error => {
        console.error(error);
      })
  }

  signUp(auth: RegisterDto): Promise<UserCredential | void> | void {
    if (auth.password !== auth.confirmPassword) {
      return this.errorSub$.next({
        code: "password_mismatch",
        name: "FirebaseError",
        message: "Password mismatch"
      });
    }
    return this.afAuth.createUserWithEmailAndPassword(auth.email, auth.password)
      .then((res) => console.log("Created User (authService)", res))
      .catch(error => this.errorSub$.next(error))
  }

  resetPassword(email: string): void {
    this.afAuth.sendPasswordResetEmail(email);
  }

  logout() {
    return this.afAuth.signOut()
      .then(() => {
        this.route.navigate(["home"]);
      })
  }

}
