import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { MainPageComponent } from './views/main-page/main-page.component';
// import { Time } from './models/classes-time';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table'  
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';



import { SignUpComponent } from './views/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScheduleMapComponent } from './views/schedule-map/schedule-map.component';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from 'src/environments/environment';
import { NavigationBarComponent } from './shared/navigation-bar/navigation-bar.component';
import { AuthService } from './data-services/auth.service';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { DialogComponent, DialogContentCnc, DialogContentLaboratorioProyectos, DialogContentMecanicaFluidos, DialogContentMecanicaMateriales, DialogContentRefrigeracion, DialogContentSalaAudiovisual, DialogContentSalaComputo } from './shared/dialog/dialog.component';
import { DialogContentMantenimiento } from './shared/dialog/dialog.component';
import { DialogContentCeldaManufactura } from './shared/dialog/dialog.component';
import { DialogContentCienciasMateriales } from './shared/dialog/dialog.component';
import { DialogContentMaquinasHerramientas } from './shared/dialog/dialog.component';
import { ChatComponent } from './views/chat/chat.component';
import { CompleteScheduleComponent } from './views/complete-schedule/complete-schedule.component';
import { ChatComponentContent } from './views/chat/chat.component';
import { SendEmailComponent } from './views/send-email/send-email.component';
import { AboutComponent } from './views/about/about.component';
import { ScheduleVisualizationGuard } from './shared/guards/schedule-visualization.guard';
import { CheckSignInGuard } from './shared/guards/check-sign-in.guard';
import { ProfessorsScheduleComponent } from './views/professors-schedule/professors-schedule.component';
import { DialogContentCubicle1, DialogContentCubicle10, DialogContentCubicle11, DialogContentCubicle12, DialogContentCubicle2, DialogContentCubicle3, DialogContentCubicle4, DialogContentCubicle5, DialogContentCubicle6, DialogContentCubicle7, DialogContentCubicle8, DialogContentCubicle9, DialogCubicleComponent } from './shared/dialog-cubicle/dialog-cubicle.component';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    MainPageComponent,
    SignUpComponent,
    ScheduleMapComponent,
    NavigationBarComponent,
    MainNavComponent,
    DialogComponent,
    DialogContentMantenimiento,
    DialogContentCeldaManufactura,
    DialogContentCienciasMateriales,
    DialogContentMaquinasHerramientas,
    DialogContentMecanicaFluidos,
    DialogContentSalaAudiovisual,
    DialogContentMecanicaMateriales,
    DialogContentRefrigeracion,
    DialogContentLaboratorioProyectos,
    DialogContentSalaComputo,
    DialogContentCnc,
    ChatComponent,
    ChatComponentContent,
    CompleteScheduleComponent,
    SendEmailComponent,
    AboutComponent,
    ProfessorsScheduleComponent,
    DialogCubicleComponent,
    DialogContentCubicle1,
    DialogContentCubicle2,
    DialogContentCubicle3,
    DialogContentCubicle4,
    DialogContentCubicle5,
    DialogContentCubicle6,
    DialogContentCubicle7,
    DialogContentCubicle8,
    DialogContentCubicle9,
    DialogContentCubicle10,
    DialogContentCubicle11,
    DialogContentCubicle12,


  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,   
    AngularFireStorageModule,
    // AngularFireStorage,
     
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatGridListModule,
    LayoutModule,
    MatListModule,
    MatDialogModule,
    MatSortModule,
    MatTableModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatDividerModule,
    // Time
  ],
  providers: [AuthService, ChatComponentContent, ScheduleVisualizationGuard, CheckSignInGuard],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
