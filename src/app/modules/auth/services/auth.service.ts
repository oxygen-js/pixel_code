import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import firebase from "firebase/compat";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
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
        // JSON.parse(<string>localStorage.getItem("user"));
      } else {
        localStorage.setItem("user", "");
        // JSON.parse(<string>localStorage.getItem("user"));
      }
    })
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

  signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log("Created User (authService)", res)
      })
      .catch((error) => {
        console.log("Failed create user (authService)", error);
      })
  }

  signOut() {
    return this.afAuth.signOut()
      .then(() => {
        localStorage.removeItem("user");
        this.route.navigate(["timer"]);
      })
  }


  // ?
  setUserData() {

  }
}
