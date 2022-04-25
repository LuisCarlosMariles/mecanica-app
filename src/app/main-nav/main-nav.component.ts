import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, of, Subscription } from 'rxjs';
import { map, shareReplay, switchMap, take, tap } from 'rxjs/operators';
import { AuthService } from '../data-services/auth.service';
import { RegistrationService } from '../data-services/registration.service'
import { ElementSchemaRegistry } from '@angular/compiler';
import { CheckSignInGuard } from '../shared/guards/check-sign-in.guard';
import { Router, UrlTree } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  providers: [AuthService]
})
export class MainNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public _authService: AuthService,
    private registerDatabase: RegistrationService,
    public _guard: CheckSignInGuard,
    public route: Router,
    private afAuth: AngularFireAuth) { }
    

  authSubscription: Subscription
  databaseSubscription: Subscription;
  public isLogged: boolean = false;
  public userEmail: any;
  public user$: Observable<any> = this._authService.angularAuth.user;
  // public guardBoolean: Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  = this._guard.canActivate();

  ngOnInit() {
    this.checkForUser();
  }

  checkForUser() {
    this.authSubscription = this._authService.getCurrentUser().subscribe(
      user => {
        if (user) {
          this.isLogged = true;
          this.userEmail = user;
          // console.log('User->', user);  // commented on final version
        }
        else {
          // console.log('No user'); //commented on realese version
        }
      }
    );
  }




  
  onSignOut() {
    this.isLogged = false;
    this._authService.logOut().then(()=>{
      window.location.reload(); // refresh pages to reset auth state, keep it in the 'then'. I you use it outside, the call will be done before log out
    });
    this._guard.isLoggedSubject.next(false);
    this.afAuth.authState.pipe(take(1))
      .pipe(map(authState => !!authState))
      .pipe(tap(auth => {
        if (auth) {
          this.route.navigate(['/signIn']); //pipes provided by domini code @ https://github.com/bezael/angular7_firebase/blob/master/src/app/guards/auth.guard.ts
        } // on signout user is logged out of firebase and returns to signIn page as an unauthenticated user
      }));
    // this.route.navigate(['signUp']);

  }


}
