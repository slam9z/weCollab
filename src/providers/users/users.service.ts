import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable, AuthProviders , AuthMethods } from 'angularfire2';

@Injectable()
export class UsersService {
    public currentUser: any;
    public auth: any;
    public userProfile: FirebaseListObservable<any>;

    constructor(private af: AngularFire) {
        this.auth = af.auth;
    }

    public login(userEmail: string, userPassword: string) {

        return new Promise((resolve, reject) => {
            this.auth.login({
            email: userEmail,
            password: userPassword
            },
            {
                provider: AuthProviders.Password,
                method: AuthMethods.Password
            }).then(
                    userData => resolve(userData) ,
                    err => reject(err)
                )
            });
    }

    public register(fname: string, lname: string, email: string, password: string) {
        return new Promise((resolve, reject) => {
            this.auth.createUser({ email: email, password: password })
                .then((newUser) => {
                    if (newUser) {
                    const itemObservable = this.af.database.object('/userProfile/' + newUser.uid);
                    itemObservable.set({
                            fname: fname,
                            lname: lname,
                            email: email,
                            status: "A",
                            lastLoginDTTM: new Date().toLocaleString()
                        });
                    }
                    resolve(newUser);
                }).catch(err => reject(err));
        });
    }

    public logout() {
        this.auth.logout();
    }

}