import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {BehaviorSubject} from "rxjs";
import {RegisterDto} from "../../models/register.dto";
import firebase from "firebase/compat";
import {getAuth} from 'firebase/auth';
import {AUTH_USER_CREDENTIAL_KEY} from "../../models/auth-user-credential";
import UserCredential = firebase.auth.UserCredential;
import {AuthErrorService} from "../auth-error/auth-error.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  get isAuthorized(): boolean {
    const auth = getAuth();
    return (auth.currentUser !== null);
  }

  errorSub$ = new BehaviorSubject(<firebase.FirebaseError> {
    code: "",
    name: 'FirebaseError',
    message: ""
  });

  constructor(
    private _route: Router,
    private _dialog: MatDialog,
    private _afAuth: AngularFireAuth,
    private _authStore: AngularFirestore,
    private _authErrorService: AuthErrorService
  ) {
  }

  setUserCredential(user: UserCredential): void {
    localStorage.setItem(AUTH_USER_CREDENTIAL_KEY, JSON.stringify(user));
    this._dialog.closeAll();
    this._route.navigate(['calc']).then(r => console.log("User sign in", r));
  }

  signIn(email: string, password: string) {
    return this._afAuth.signInWithEmailAndPassword(email, password)
      .then((user) => this.setUserCredential(user));
  }

  signUp(auth: RegisterDto): Promise<UserCredential | void> | void {

    if (auth.password !== auth.confirmPassword) {
      return this.errorSub$.next({
        code: "password_mismatch",
        name: "FirebaseError",
        message: "Password mismatch"
      });
    }

    return this._afAuth.createUserWithEmailAndPassword(auth.email, auth.password)
      .then((user) => this.setUserCredential(user))
      .catch(error => this.errorSub$.next(error))
  }

  resetPassword(email: string): void {
    this._afAuth.sendPasswordResetEmail(email);
  }

  logout() {
    return this._afAuth.signOut()
      .then(() => {
        localStorage.removeItem("user_credential");
        this._route.navigate(["home"]).then(r => console.log("User logout", r));
      })
  }

}
