import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { ProfessorsScheduleService } from 'src/app/data-services/professors-schedule.service';
import { DialogCubicleComponent } from 'src/app/shared/dialog-cubicle/dialog-cubicle.component';


export interface CubicleScheduleTemplate {
  weekday: string;
  startHour1: number;
  endHour1: number;
  startHour2: number;
  endHour2: number;
  dayNumber: number;
}

@Component({
  selector: 'app-professors-schedule',
  templateUrl: './professors-schedule.component.html',
  styleUrls: ['./professors-schedule.component.scss']
})

export class ProfessorsScheduleComponent implements OnInit, OnDestroy {

  constructor(
    public _professorsSchedule: ProfessorsScheduleService,
    public dialog: MatDialog,
  ) {
    this.dialogBox = new DialogCubicleComponent(dialog, _professorsSchedule);
  }

  public dialogBox: DialogCubicleComponent;
  public cbcData1 = [];
  public weekdayData1: CubicleScheduleTemplate;
  public cbcData2 = [];
  public weekdayData2: CubicleScheduleTemplate;
  public cbcData3 = [];
  public weekdayData3: CubicleScheduleTemplate;
  public cbcData4 = [];
  public weekdayData4: CubicleScheduleTemplate;
  public cbcData5 = [];
  public weekdayData5: CubicleScheduleTemplate;
  public cbcData6 = [];
  public weekdayData6: CubicleScheduleTemplate;
  public cbcData7 = [];
  public weekdayData7: CubicleScheduleTemplate;
  public cbcData8 = [];
  public weekdayData8: CubicleScheduleTemplate;
  public cbcData9 = [];
  public weekdayData9: CubicleScheduleTemplate
  public cbcData10 = [];
  public weekdayData10: CubicleScheduleTemplate
  public cbcData11 = [];
  public weekdayData11: CubicleScheduleTemplate

  public hour: Number;
  public day: Number;


  public subscription1: Subscription;
  public subscription2: Subscription;
  public subscription3: Subscription;
  public subscription4: Subscription;
  public subscription5: Subscription;
  public subscription6: Subscription;
  public subscription7: Subscription;
  public subscription8: Subscription;
  public subscription9: Subscription;
  public subscription10: Subscription;
  public subscription11: Subscription;
  // public subscription9: Subscription;

  public floor: string;
  public spinnerLoading: boolean = true;
  public spinnerLoading2: boolean = true;

  ngOnInit(): void {
    const time = new Date;
    this.day = time.getDay();
    this.hour = time.getHours();
    this.subscriptions();
    this.weekdayName();
  }


  weekdayName() {  // returns the current day number from Time function
    const dayNumber = this.day as number;
    let dayName;
    switch (dayNumber) {
      case 0:
        dayName = 'Miércoles';
        break;
      case 1:
        dayName = 'Lunes';
        break;
      case 2:
        dayName = 'Martes';
        break;
      case 3:
        dayName = 'Miércoles';
        break;
      case 4:
        dayName = 'Jueves';
        break;
      case 5:
        dayName = 'Viernes';
        break;
      case 6:
        dayName = 'Miércoles';
        break;
      default:
        break;
    }
    return dayName;
  }

  cubicleData(number) {
    let cubicle;
    switch (number) {
      case 'cubicle1':
        cubicle = this.weekdayData1;
        break;
      case 'cubicle2':
        cubicle = this.weekdayData2;
        break;
      case 'cubicle3':
        cubicle = this.weekdayData3;
        break;
      case 'cubicle4':
        cubicle = this.weekdayData4;
        break;
      case 'cubicle5':
        cubicle = this.weekdayData5;
        break;
      case 'cubicle6':
        cubicle = this.weekdayData6;
        break;
      case 'cubicle7':
        cubicle = this.weekdayData7;
        break;
      case 'cubicle8':
        cubicle = this.weekdayData8;
        break;
      case 'cubicle9':
        cubicle = this.weekdayData9;
        break;
      case 'cubicle10':
        cubicle = this.weekdayData10;
        break;
      case 'cubicle11':
        cubicle = this.weekdayData11;
        break;
      default:
        break;
    }
    return cubicle;
  }

  classesArray1 = [];


  subscriptions() {
    this.subscription1 = this._professorsSchedule.cubicle1().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData1.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
        // this.weekdayData1 = this.cbcData1.filter(x => x.day == this.weekdayName()).shift(); // compares current weekday to the weekdays inside array and assigns that complete object in which that weekday is contained to a local dayData1 (local variable) it also takes the object out of the array with .reduce

      });
      this.weekdayData1 = this.cbcData1.filter(x => x.day == this.weekdayName()).shift();
      console.log(this.weekdayData1)
    });

    this._professorsSchedule.cubicle1Classes().subscribe(data => {
      data.forEach(element => {
        this.classesArray1 = element.payload.doc.get('classesList');
      });
      // console.log(this.classesArray1);
    });


    this.subscription2 = this._professorsSchedule.cubicle2().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData2.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
        this.weekdayData2 = this.cbcData2.filter(x => x.day == this.weekdayName()).shift(); // compares current weekday to the weekdays inside array and assigns that complete object in which that weekday is contained to a local dayData1 (local variable) it also takes the object out of the array with .reduce
      });
    });

    this.subscription3 = this._professorsSchedule.cubicle3().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData3.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
        this.weekdayData3 = this.cbcData3.filter(x => x.day == this.weekdayName()).shift(); // compares current weekday to the weekdays inside array and assigns that complete object in which that weekday is contained to a local dayData1 (local variable) it also takes the object out of the array with .reduce
      });
    });

    this.subscription4 = this._professorsSchedule.cubicle4().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData4.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
        this.weekdayData4 = this.cbcData4.filter(x => x.day == this.weekdayName()).shift(); // compares current weekday to the weekdays inside array and assigns that complete object in which that weekday is contained to a local dayData1 (local variable) it also takes the object out of the array with .reduce
      });
    });

    this.subscription5 = this._professorsSchedule.cubicle5().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData5.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
        this.weekdayData5 = this.cbcData5.filter(x => x.day == this.weekdayName()).shift(); // compares current weekday to the weekdays inside array and assigns that complete object in which that weekday is contained to a local dayData1 (local variable) it also takes the object out of the array with .reduce
      });
    });

    this.subscription6 = this._professorsSchedule.cubicle6().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData6.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
        this.weekdayData6 = this.cbcData6.filter(x => x.day == this.weekdayName()).shift(); // compares current weekday to the weekdays inside array and assigns that complete object in which that weekday is contained to a local dayData1 (local variable) it also takes the object out of the array with .reduce
      });
    });

    this.subscription7 = this._professorsSchedule.cubicle7().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData7.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
        this.weekdayData7 = this.cbcData7.filter(x => x.day == this.weekdayName()).shift(); // compares current weekday to the weekdays inside array and assigns that complete object in which that weekday is contained to a local dayData1 (local variable) it also takes the object out of the array with .reduce
      });
    });

    this.subscription8 = this._professorsSchedule.cubicle8().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData8.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
        // compares current weekday to the weekdays inside array and assigns that complete object in which that weekday is contained to a local dayData1 (local variable) it also takes the object out of the array with .reduce
      });
      this.weekdayData8 = this.cbcData8.filter(x => x.day == this.weekdayName()).shift();
      this.spinnerLoading = false;
      this.spinnerLoading2 = false;
    });

    this.subscription9 = this._professorsSchedule.cubicle9().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData9.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
        this.weekdayData9 = this.cbcData9.filter(x => x.day == this.weekdayName()).shift(); // compares current weekday to the weekdays inside array and assigns that complete object in which that weekday is contained to a local dayData1 (local variable) it also takes the object out of the array with .reduce
      });
    });

    this.subscription10 = this._professorsSchedule.cubicle10().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData10.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
        this.weekdayData10 = this.cbcData10.filter(x => x.day == this.weekdayName()).shift(); // compares current weekday to the weekdays inside array and assigns that complete object in which that weekday is contained to a local dayData1 (local variable) it also takes the object out of the array with .reduce
      });
    });

    this.subscription11 = this._professorsSchedule.cubicle11().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData11.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
        this.weekdayData11 = this.cbcData11.filter(x => x.day == this.weekdayName()).shift(); // compares current weekday to the weekdays inside array and assigns that complete object in which that weekday is contained to a local dayData1 (local variable) it also takes the object out of the array with .reduce
      });
    });


  }


  cubicleStatus(name: string): string {
    const CUBICLE_DATA = this.cubicleData(name);
    if ((this.hour > CUBICLE_DATA.startHour1 && this.hour < CUBICLE_DATA.endHour1) ||
      (this.hour > CUBICLE_DATA.startHour2 && this.hour < CUBICLE_DATA.endHour2)) {
      return 'Cubiculo disponible';
    }
    else {
      return 'Cubiculo no disponible';
    }
  }


  tileColor(name) {
    if (this.cubicleStatus(name) == 'Cubiculo disponible') {
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


  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
    this.subscription4.unsubscribe();
    this.subscription5.unsubscribe();
    this.subscription6.unsubscribe();
    this.subscription7.unsubscribe();
    this.subscription8.unsubscribe();
  }
}
