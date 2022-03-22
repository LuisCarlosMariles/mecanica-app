import { Component, OnInit, AfterViewInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { MANUFACTURE_LAB_ARRAY, DESIGN_LAB_ARRAY, THERMO_LAB_ARRAY, FLUIDS_LAB_ARRAY, LaboratoriesTemplate } from '../../models/laboratories';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent, /*DialogContentManufacture*/ } from '../../shared/dialog/dialog.component';
import { Time } from '../../models/classes-time';
import { defaultMaxListeners } from 'stream';
import { WeekdayArray } from '../schedule-map/weekdayArrayClass';
import { AuthService } from '../../data-services/auth.service';
import { MainNavComponent } from '../../main-nav/main-nav.component';
import { ChatComponentContent } from '../../views/chat/chat.component';
import { StudyRoomService } from 'src/app/data-services/study-room.service';
import { first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { ScheduleMapService } from 'src/app/data-services/schedule-map.service';
import { Observable } from 'rxjs';
import { EmailValidator } from '@angular/forms';
import { HostListener } from "@angular/core";
import { AngularFireMessaging } from '@angular/fire/messaging';
import { RegistrationService } from 'src/app/data-services/registration.service';

export interface ClassroomTemplate {
  weekday: string;
  className: string;
  teacher: string;
  startHour: number;
  endHour: number;
}

@Component({
  selector: 'app-schedule-map',
  templateUrl: './schedule-map.component.html',
  styleUrls: ['./schedule-map.component.scss']
})

export class ScheduleMapComponent implements OnInit, OnDestroy {

  dialogBox: DialogComponent;
  mobile: boolean = false; //To change HTML content depending on screen size
  screenHeight: number;
  screenWidth: number;

  constructor(
    public dialog: MatDialog,
    public _authService: AuthService,
    public mainNavComponent: MainNavComponent,
    public chatComponentContent: ChatComponentContent,
    public _studyRoom: StudyRoomService,
    public angularAuth: AngularFireAuth,
    public _scheduleMap: ScheduleMapService,
    private afMessaging: AngularFireMessaging,
    private _registrationService: RegistrationService,
  ) {
    this.dialogBox = new DialogComponent(dialog);
    this.onResize();//To change HTML content depending on screen size
  }



  public email: string = this.mainNavComponent.userEmail?.email;
  public name: string = this.email.substring(0, this.email.indexOf('@')).charAt(0).toUpperCase() + this.email.slice(1).substring(0, this.email.indexOf('@')-1);
  
  hour: Number;
  minutes: Number;
  seconds: Number;
  day: Number;
  peopleNumber: Number = 0;
  botoncito() {
    console.log(this.peopleNumber[0]);
  }

  // name: string;

  public verifiedBoolean: boolean; // prueba
  ngOnInit() {
    // if (window.screen.width === 900) { // 768px portrait
    //   this.mobile = true;
    // }

    this.angularAuth.currentUser.then(result => {
      this.verifiedBoolean = result.emailVerified;
      // console.log(this.verifiedBoolean);
      // console.log(MANUFACTURE_LAB_ARRAY)
      this.subscriptions()
    })
    //////////////////////////////        
    this.studyRoomPeople();
    this.chatComponentContent.deleteMessageAfter2Hours();
    this._authService.isChatApproved();

    setInterval(() => {
      const time = new Date;
      this.seconds = time.getSeconds();
      this.minutes = time.getMinutes();
      this.hour = time.getHours();
      this.day = time.getDay();
    }, 1000);

    //this.chatComponentContent.sameTime()
    const time = new Date;
    this.dayFirebase = time.getDay();
    this.hourFirebase = time.getHours();
  }

  @HostListener('window:resize', ['$event']) //To change HTML content depending on screen size
  onResize(event?) {
   this.screenHeight = window.innerHeight;
   this.screenWidth = window.innerWidth;
   if(this.screenWidth <= 900){
     this.mobile = true;
   }
   else{
    this.mobile = false;
   }
   console.log(this.mobile);
}


  requestPermission() {
  this.afMessaging.requestPermission
    .subscribe(
      () => { console.log('Permission granted!'); },
      (error) => { console.error(error); },  
    );
  }

  weekdayName() {  // returns the current day number from Time function
    const dayNumber = this.day as number;
    let dayName;
    switch (dayNumber) {
      case 0:
        dayName = 'Domingo';
        break;
      case 1:
        dayName = 'Lunes';
        break;
      case 2:
        dayName = 'Martes';
        break;
      case 3:
        dayName = 'Miercoles';
        break;
      case 4:
        dayName = 'Jueves';
        break;
      case 5:
        dayName = 'Viernes';
        break;
      case 6:
        dayName = 'Martes';
        break;
      default:
        break;
    }
    return dayName;
  }





  selectLabDataArray(name: string): LaboratoriesTemplate[] { // gives LAB_ARRAY the laboratory information from selection
    let LAB_ARRAY = [];
    switch (name) {
      case 'thermo':
        LAB_ARRAY = THERMO_LAB_ARRAY;
        break;
      case 'manufacture':
        LAB_ARRAY = MANUFACTURE_LAB_ARRAY;
        break;
      case 'design':
        LAB_ARRAY = DESIGN_LAB_ARRAY;
        break;
      case 'fluids':
        LAB_ARRAY = FLUIDS_LAB_ARRAY;
        break;
      default:
        break;
    }
    return LAB_ARRAY;
  }


  weekdayArray(name: string): LaboratoriesTemplate[] { // Fills array with information from that day
    let dayClasses = [];
    const LAB_DATA = this.selectLabDataArray(name);

    dayClasses = LAB_DATA.filter(x => x.weekday == this.weekdayName());


    return dayClasses;
  }




  currentClassIndex(name: string): number { // Returns index when conditions of schedule time apply
    const DATA = this.weekdayArray(name);
    // console.log(DATA);
    // console.log(this.dayClassesTest);
    // console.log(this.labName(name)[0].weekday);/////
    // console.log(this.weekdayName())/////
    // console.log(<number>(this.hour)+16);/////

    const currentClassIndex = DATA.findIndex((lab) => (lab.startHour <= this.hour) && lab.endHour > this.hour);
    // console.log(currentClassIndex);

    return currentClassIndex;
    // console.log(currentClassIndex);


  }



  classStatus(name: string): string {

    if (this.currentClassIndex(name) == -1) {
      return 'Laboratorio disponible';
    }
    else {
      return this.weekdayArray(name)[this.currentClassIndex(name)].className;
    }
  }

  teacher(name: string): string {
    let teacherInLab: string;
    if (this.currentClassIndex(name) == -1) {
      teacherInLab = 'Sin docente';
      return (teacherInLab);
    }
    else {
      teacherInLab = this.weekdayArray(name)[this.currentClassIndex(name)].teacher;
      return (teacherInLab);
    }
  }

  changeHourFormat(): string {
    if (this.hour == 12 && this.seconds > 9 && this.minutes > 9) {
      return (this.hour as number) + ':' + this.minutes + ':' + this.seconds + ' pm';
    }
    else if (this.hour == 12 && this.seconds < 10 && this.minutes < 10) {
      return (this.hour as number) + ':0' + this.minutes + ':0' + this.seconds + ' pm';
    }
    else if (this.hour == 12 && this.minutes < 10) {
      return (this.hour as number) + ':0' + this.minutes + ':' + this.seconds + ' pm';
    }
    else if (this.hour == 12 && this.seconds < 10) {
      return (this.hour as number) + ':' + this.minutes + ':0' + this.seconds + ' pm';
    }


    else if (this.hour > 12 && this.seconds > 9 && this.minutes > 9) {
      return ((this.hour as number) - 12) + ':' + this.minutes + ':' + this.seconds + ' pm';
    }
    else if (this.hour > 12 && this.seconds < 10 && this.minutes < 10) {
      return ((this.hour as number) - 12) + ':0' + this.minutes + ':0' + this.seconds + ' pm';
    }
    else if (this.hour > 12 && this.minutes < 10) {
      return ((this.hour as number) - 12) + ':0' + this.minutes + ':' + this.seconds + ' pm';
    }
    else if (this.hour > 12 && this.seconds < 10) {
      return ((this.hour as number) - 12) + ':' + this.minutes + ':0' + this.seconds + ' pm';
    }

    else if (this.hour < 12 && this.seconds > 9 && this.minutes > 9) {
      return (this.hour as number) + ':' + this.minutes + ':' + this.seconds + ' am';
    }
    else if (this.hour < 12 && this.seconds < 10 && this.minutes < 10) {
      return (this.hour as number) + ':0' + this.minutes + ':0' + this.seconds + ' am';
    }
    else if (this.hour < 12 && this.minutes < 10) {
      return (this.hour as number) + ':0' + this.minutes + ':' + this.seconds + ' am';
    }
    else {
      return (this.hour as number) + ':' + this.minutes + ':0' + this.seconds + ' am';
    }
  }

  tileColor(name) {
    if (this.currentClassIndex(name) == -1) {
      const buttonStyles = {
        'background-color': 'rgb(76, 175, 80)'
      };
      return buttonStyles;
    }
    else {
      const buttonStyles = {
        'background-color': 'rgb(244, 67, 54)'
      };
      return buttonStyles;
    }
  }

  spinnerLoading: boolean = true;
  studyRoomPeople() {
    this._studyRoom.peopleInRoom().subscribe(
      data => {
        this.spinnerLoading = false;
        this.peopleNumber = data[0];
      }
    );
  }

  studyRoomColor() {
    if (this.peopleNumber <= 3) {
      const buttonStyles = {
        'background-color': 'rgb(76, 175, 80)'
      };
      return buttonStyles;
    }
    else if (this.peopleNumber > 3 && this.peopleNumber <= 7) {
      const buttonStyles = {
        'background-color': 'rgb(174,	222,	62)'
      };
      return buttonStyles;
    }
    else if (this.peopleNumber > 7 && this.peopleNumber <= 10) {
      const buttonStyles = {
        'background-color': 'rgb(255, 221, 60)'
      };
      return buttonStyles;
    }
    else if (this.peopleNumber > 10 && this.peopleNumber <= 15) {
      const buttonStyles = {
        'background-color': 'rgb(	248, 87, 16)'
      };
      return buttonStyles;
    }
    else {
      const buttonStyles = {
        'background-color': 'rgb(244, 67, 54)'
      };
      return buttonStyles;
    }
  }































  public classroom1 = [];
  public isLoaded: boolean = false;
  public dayFirebase: number;
  public hourFirebase: number;

  weekdayNameFirebase() {  // returns the current day number from Time function
    const dayNumber = this.dayFirebase as number;
    let dayName;
    switch (dayNumber) {
      case 0:
        dayName = 'sunday';
        break;
      case 1:
        dayName = 'monday';
        break;
      case 2:
        dayName = 'tuesday';
        break;
      case 3:
        dayName = 'wednesday';
        break;
      case 4:
        dayName = 'thursday';
        break;
      case 5:
        dayName = 'friday';
        break;
      case 6:
        dayName = 'saturday';
        break;
      default:
        break;
    }
    return dayName;
  }

  currentClass(className): ClassroomTemplate { //Returns the selected classroom
    let data;
    switch (className) {
      case 'mecanicaFluidos':
        data = this.mecanicaFluidosClassroom;
        break;
      case 'cienciasMateriales':
        data = this.cienciasMaterialesClassroom;
        break;
      case 'maquinasHerramientas':
        data = this.maquinasHerramientasClassroom;
        break;
      case 'salaAudiovisual':
        data = this.salaAudiovisualClassroom;
        break;
      case 'salaComputo':
        data = this.salaComputoClassroom;
        break;
      case 'celdaManufactura':
        data = this.celdamanufacturaClassroom;
        break;
      case 'mantenimiento':
        data = this.mantenimientoClassroom;
        break;
      case 'salaAsesorias':
        data = this.salaAsesoriasClassroom;
        break;
      case 'refrigeracion':
        data = this.refrigeracionClassroom;
        break;
      case 'mecanicaMateriales':
        data = this.mecanicaMaterialesClassroom;
        break;
      case 'cnc':
        data = this.cncClassroom;
        break;
      case 'laboratorioProyectos':
        data = this.laboratorioProyectos;
        break;
      default:
        break;
    }
    return data;
  }





  //public dayData = []; // complete array of objects from that day and class
  // public completeClassroomData = [];
  public firstName: string;
  public lastName: string;
  public cienciasMaterialesClassroom: ClassroomTemplate;
  public mecanicaFluidosClassroom: ClassroomTemplate;
  public maquinasHerramientasClassroom: ClassroomTemplate;
  public salaAudiovisualClassroom: ClassroomTemplate;
  public salaComputoClassroom: ClassroomTemplate;
  public celdamanufacturaClassroom: ClassroomTemplate;
  public mantenimientoClassroom: ClassroomTemplate;
  public salaAsesoriasClassroom: ClassroomTemplate;
  public refrigeracionClassroom: ClassroomTemplate;
  public mecanicaMaterialesClassroom: ClassroomTemplate;
  public cncClassroom: ClassroomTemplate;
  public laboratorioProyectos: ClassroomTemplate;


  // public currentClassData;
  public currentClassName;

  subscriptions() {

    this._registrationService.getUser().subscribe(data => {
      let name = data.map(element => element.payload.doc.data()).find(x => x.email == this.email);
      // .map(element => element.payload.doc.data());
      this.firstName = name?.firstName
      this.lastName = name?.lastName;

      console.log(name);
      console.log('Hola ' + this.firstName + ' ' + this.lastName);
    })

    this._scheduleMap.cienciasMaterialesClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class

      let completeClassroomData = data.map(element => element.payload.doc.data()); // filling all the data from firebase class into variable
      // console.log(data, completeClassroomData); //commented on final version

      // let dayData = data.map(element => element.payload.doc.get(this.weekdayNameFirebase())).shift(); // filling current day data to variable
      let dayData = this.classDayData(data, this.weekdayNameFirebase())
      // console.log(dayData, dayData.length, this.hourFirebase);  //commented on final version

      this.cienciasMaterialesClassroom = this.classStatusTest(dayData); // checking if there is a class in current hour
      // console.log(this.cienciasMaterialesClassroom);  //commented on final version
    });


    this._scheduleMap.mecanicaFluidosClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class
      let completeClassroomData = data.map(element => element.payload.doc.data()); // filling all the data from firebase class into variable
      // console.log(completeClassroomData);  //commented on final version
      let dayData = this.classDayData(data, this.weekdayNameFirebase())
      // let dayData = data.map(element => element.payload.doc.get(this.weekdayNameFirebase())).shift(); // filling current day data to variable
      this.mecanicaFluidosClassroom = this.classStatusTest(dayData); // checking if there is a class in current hour
    });

    this._scheduleMap.maquinasHerramientasClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class
      let completeClassroomData = data.map(element => element.payload.doc.data()); // filling all the data from firebase class into variable
      let dayData = this.classDayData(data, this.weekdayNameFirebase()) // filling current day data to variable
      this.maquinasHerramientasClassroom = this.classStatusTest(dayData); // checking if there is a class in current hour
    });

    this._scheduleMap.salaAudiovisualClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class
      let completeClassroomData = data.map(element => element.payload.doc.data()); // filling all the data from firebase class into variable
      let dayData = this.classDayData(data, this.weekdayNameFirebase()); // filling current day data to variable
      this.salaAudiovisualClassroom = this.classStatusTest(dayData); // checking if there is a class in current hour
      // console.log(dayData);  //commented on final version
    });

    this._scheduleMap.salaComputoClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class
      let completeClassroomData = data.map(element => element.payload.doc.data()); // filling all the data from firebase class into variable
      let dayData = this.classDayData(data, this.weekdayNameFirebase()); // filling current day data to variable
      this.salaComputoClassroom = this.classStatusTest(dayData); // checking if there is a class in current hour
      // console.log(dayData);    //commented on final version
    });

    this._scheduleMap.celdaManufacturaClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class
      let completeClassroomData = data.map(element => element.payload.doc.data()); // filling all the data from firebase class into variable
      let dayData = this.classDayData(data, this.weekdayNameFirebase()); // filling current day data to variable
      this.celdamanufacturaClassroom = this.classStatusTest(dayData); // checking if there is a class in current hour
      // console.log(dayData);    //commented on final version
    });

    this._scheduleMap.mantenimientoClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class
      let completeClassroomData = data.map(element => element.payload.doc.data()); // filling all the data from firebase class into variable
      let dayData = this.classDayData(data, this.weekdayNameFirebase()); // filling current day data to variable
      this.mantenimientoClassroom = this.classStatusTest(dayData); // checking if there is a class in current hour
      // console.log(dayData);    //commented on final version
    });

    this._scheduleMap.salaAsesoriasClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class
      let completeClassroomData = data.map(element => element.payload.doc.data()); // filling all the data from firebase class into variable
      let dayData = this.classDayData(data, this.weekdayNameFirebase()); // filling current day data to variable
      this.salaAsesoriasClassroom = this.classStatusTest(dayData); // checking if there is a class in current hour
      // console.log(dayData);    //commented on final version
    });

    this._scheduleMap.refrigeracionClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class
      let completeClassroomData = data.map(element => element.payload.doc.data()); // filling all the data from firebase class into variable
      let dayData = this.classDayData(data, this.weekdayNameFirebase()); // filling current day data to variable
      this.refrigeracionClassroom = this.classStatusTest(dayData); // checking if there is a class in current hour
      // console.log(dayData);    //commented on final version
    });

    this._scheduleMap.mecanicaMaterialesClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class
      let completeClassroomData = data.map(element => element.payload.doc.data()); // filling all the data from firebase class into variable
      let dayData = this.classDayData(data, this.weekdayNameFirebase()); // filling current day data to variable
      this.mecanicaMaterialesClassroom = this.classStatusTest(dayData); // checking if there is a class in current hour
      // console.log(dayData);    //commented on final version
    });

    this._scheduleMap.cncClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class
      let completeClassroomData = data.map(element => element.payload.doc.data()); // filling all the data from firebase class into variable
      let dayData = this.classDayData(data, this.weekdayNameFirebase()); // filling current day data to variable
      this.cncClassroom = this.classStatusTest(dayData); // checking if there is a class in current hour
      // console.log(dayData);    //commented on final version
    });

    this._scheduleMap.laboratorioProyectosClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class
      let completeClassroomData = data.map(element => element.payload.doc.data()); // filling all the data from firebase class into variable
      let dayData = this.classDayData(data, this.weekdayNameFirebase()); // filling current day data to variable
      this.laboratorioProyectos = this.classStatusTest(dayData); // checking if there is a class in current hour
      // console.log(dayData);    //commented on final version
      this.isLoaded = true;
    });
  }

  classDayData(data, day) {
    let dayData = data.map(element => element.payload.doc.get(day)).shift();
    if (dayData) {
      return dayData;
    }
    else {
      return dayData = [];
    }
  }


  classStatusTest(className: Array<ClassroomTemplate>): ClassroomTemplate { // function that takes data from that day and looks for the current hour availability
    let currentClassData: ClassroomTemplate;
    currentClassData = className.find((lab) => (lab.startHour <= this.hourFirebase) && lab.endHour > this.hourFirebase);
    if (currentClassData) {
      this.currentClassName = currentClassData;
      return (this.currentClassName)
    }
    else {
      currentClassData = {
        weekday: null,
        className: '', // Was Salon disponible
        teacher: 'Docente no disponible',
        startHour: 0,
        endHour: 0,
      }
      this.currentClassName = currentClassData;
      return (currentClassData)
    }
  }

  tileTest(classTest) {
    if (this.currentClass(classTest).weekday) {
      console.log(true);
    }
    else {
      console.log(false);
    }
  }

  tileColorFirebase(className: ClassroomTemplate): object {
    if (!this.currentClass(className)?.weekday) {
      const availability = {
        'background-color': 'rgb(76, 175, 80)',
        'font-weight': 'bold',
        // 'margin-top': '50%'
      };
      return availability;
    }
    else {
      const availability = {
        'background-color': 'rgb(244, 67, 54)',
      };
      return availability;
    }
  }





  ngOnDestroy() {
    setInterval(() => {
      const time = new Date;
      this.seconds = time.getSeconds();
      this.minutes = time.getMinutes();
      this.hour = time.getHours();
      this.day = time.getDay();
    }, 1000);
  }

}


//    Luis Carlos Mariles S.



