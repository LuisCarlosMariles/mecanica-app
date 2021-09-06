import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleMapComponent } from '../app/views/schedule-map/schedule-map.component';
import { CompleteScheduleComponent } from './views/complete-schedule/complete-schedule.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { SendEmailComponent } from './views/send-email/send-email.component';
import { CheckSignInGuard } from './shared/guards/check-sign-in.guard';
import { AboutComponent } from './views/about/about.component';
import { ScheduleVisualizationGuard } from './shared/guards/schedule-visualization.guard';
import { ProfessorsScheduleComponent } from './views/professors-schedule/professors-schedule.component';

const routes: Routes = [
  {path: 'map', component: ScheduleMapComponent},
  {path: 'signIn', canActivate:[CheckSignInGuard], component: SignInComponent},
  {path: 'signUp', canActivate:[CheckSignInGuard], component: SignUpComponent},
  {path: 'scheduleHome', canActivate:[ScheduleVisualizationGuard], component: ScheduleMapComponent},
  {path: 'completeSchedule', canActivate:[ScheduleVisualizationGuard], component: CompleteScheduleComponent},
  {path: 'sendVerificationEmail', component: SendEmailComponent},
  {path: 'about', component: AboutComponent},
  {path: 'professors', canActivate:[ScheduleVisualizationGuard], component: ProfessorsScheduleComponent},
  {path:'',redirectTo:'about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
