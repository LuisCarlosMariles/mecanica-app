import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { first, map, take, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/data-services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ScheduleVisualizationGuard implements CanActivate, OnInit{
 

  constructor(
    private route: Router,
    private afAuth: AngularFireAuth,){}

  ngOnInit(): void {
    this.canActivate();

  } //?????

  canActivate(): Promise<boolean> | Observable<boolean>{
    return this.afAuth.authState
                      .pipe(map(authState => {
                        if(authState){ //if the user was created
                        // console.log(authState); // commented in final version
                        return !!authState.emailVerified} //if the user has accpeted the email verification, the access is true. If it exists but hasnt accepted, returns false
                        // console.log('nooo');   //commented on final version
                        this.route.navigate(['/signIn']); // this happens if the user doesn't exist
                      }));

    // return await this.afAuth.currentUser
    //                   .then((result) => {
    //                     if(result){
    //                       return result.emailVerified}
    //                     else{
    //                       console.log(result.emailVerified)
    //                        this.route.navigate(['/signIn']);
    //                     }});


    // return this.afAuth.authState.pipe(take(1))
    //   .pipe(map(authState => !!authState))
    //   .pipe(tap(auth => {
    //     if (!auth) {
    //       this.route.navigate(['/signIn']);
    //     } //pipes provided by domini code @ https://github.com/bezael/angular7_firebase/blob/master/src/app/guards/auth.guard.ts
    //     // canActivate returns boolean state that activates page for authenticated users
    //   }));













    // this._authentication.getCurrentUser().pipe().subscribe(result =>{
    //   if(result && result.emailVerified){
    //      this.isLoggedSubject.next(true);
    //     // this.isLogged = true;
    //   }
    //   else{
    //     this.isLoggedSubject.next(false);
    //     // this.isLogged = false;
    //   }
    // });
    // //  console.log(this.isLoggedSubject);
    // this.isLoggedSubject.subscribe(result =>{
    //   if(result){
    //     // this.isLoggedSubject.next(false);
    //     this.logged = true;
    //   }
    //   else{
    //     // this.isLoggedSubject.next(true);
    //      this.logged = false;
    //   }
    //   console.log(result);
    // });
    // console.log(this.logged);
    // return this.logged;
  }
  
}
