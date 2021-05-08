import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleMapComponent } from '../app/views/schedule-map/schedule-map.component';
import { CompleteScheduleComponent } from './views/complete-schedule/complete-schedule.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { SendEmailComponent } from './views/send-email/send-email.component';
import { CheckSignInGuard } from './shared/guards/check-sign-in.guard';

const routes: Routes = [
  {path: 'map', component: ScheduleMapComponent},
  {path: 'signIn', canActivate:[CheckSignInGuard], component: SignInComponent},
  {path: 'signUp', canActivate:[CheckSignInGuard], component: SignUpComponent},
  {path: 'scheduleHome', component: ScheduleMapComponent},
  {path: 'completeSchedule', component: CompleteScheduleComponent},
  {path: 'sendVerificationEmail', component: SendEmailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
