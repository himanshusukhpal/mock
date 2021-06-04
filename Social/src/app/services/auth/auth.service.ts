/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
/* eslint-disable object-shorthand */
/* eslint-disable no-underscore-dangle */
import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';



interface AuthResponseData{
idToken:	string;
email:	string;
refreshToken:	string;
expiresIn:	string;
localId:	string;
registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private _isAuthenticated=false;
  private _user= new BehaviorSubject<User>(null);

  // get authenticated(){
  //   return this._user.asObservable().pipe(
  //     map(user=>{
  //       if(user){
  //         console.log(!!user.token);
  //         return !!user.token;}
  //       else{return false;}
  //       }));
  // }
  userData: any;
  email: any;
  constructor(private http: HttpClient
    ,public afstore: AngularFirestore
    ,public ngFireAuth: AngularFireAuth,
    //public router: Router,
    public ngZone: NgZone
   )
    {
      this.ngFireAuth.authState.subscribe(user => {
        if (user) {
          this.userData = user;
          this.email=user.email;
          console.log(this.email +' hi');
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user'));
        } else {
          localStorage.setItem('user', null);
          JSON.parse(localStorage.getItem('user'));
        }
      });
}

  // signup(email: string, password: string){
  //   return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDUfHKUO9Vc6BCi4TDDq3kyMKe0aJJWzHo',
  //   {
  //     email: email,password: password, returnSecureToken: true
  //   }).pipe(
  //     tap(this.setUserData.bind(this)
  //       ));
  // }
  signup(email: string, password: string) {
    this.ngFireAuth.onAuthStateChanged(user => {if(user) {
      console.log(user.uid);
      console.log(user.email);
    }
  });
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

  // login(email: string, password: string){
  //   return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDUfHKUO9Vc6BCi4TDDq3kyMKe0aJJWzHo',{
  //     email: email,password: password, returnSecureToken: true
  //   }).pipe(
  //     tap(this.setUserData.bind(this)
  //       ));
  // }
  login(email: string, password: string) {
    console.log(this.ngFireAuth.signInWithEmailAndPassword(email, password));
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);

  }

  // private setUserData(userData: AuthResponseData){
  //   const expirationTime= new Date(new Date().getTime()+ (+userData.expiresIn*1000));
  //       this._user.next(new User(userData.localId,userData.email, userData.idToken, expirationTime));

  // }
  get authenticated(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null ) ? true : false;
  }
  // getemail(){
  //   const user= JSON.parse(localStorage.getItem('user'));
  //   console.log(user);
  //   return user.email;
  // }

 update(user){
   this.ngFireAuth.updateCurrentUser(user).then(()=>console.log('updated')).catch(err=>{console.log(err);});
 }

  setUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afstore.doc(`users/${user.uid}`);
    const expirationTime= new Date(new Date().getTime()+ (+user.expiresIn*1000));
    const userData: User = {
      id: user.localId,
      email: user.email,
      token:user.idToken,
      tokenExpirationDate: expirationTime
  };
    return userRef.set(userData, {
      merge: true
    });
  }

  signOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
    });
  }

}
