import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';

@Injectable()
export class UsersService {
    public auth: any;
    public userProfile: any;

    constructor() {
        this.auth = firebase.auth();
        this.userProfile = firebase.database().ref('/userProfile');
    }

    public login(userEmail: string, userPassword: string) {
        return new Promise((resolve, reject) => {
            this.auth.signInWithEmailAndPassword(userEmail, userPassword)
                .then(
                userData => resolve(userData),
                err => reject(err)
                );
        });
    }

    public register(fname: string, lname: string, email: string, password: string) {
        return new Promise((resolve, reject) => {
            this.auth.createUserWithEmailAndPassword(email, password)
                        .then((newUser) => {
                        this.userProfile.child(newUser.uid).set({email: email});
                        },(err) => reject(err));
        });
    }

    public logout() {
        return this.auth.signOut();
    }

}