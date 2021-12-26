import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import firebase from "firebase/compat";
import {BehaviorSubject} from "rxjs";
import {RegisterDto} from "../models/register.dto";
import UserCredential = firebase.auth.UserCredential;

@Injectable()
export class AuthService {

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
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.setItem("user", "");
      }
    });
  }

  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.route.navigate(['calc']);
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

  signOut() {
    return this.afAuth.signOut()
      .then(() => {
        localStorage.removeItem("user");
        this.route.navigate(["timer"]);
      })
  }

}
