import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { first, last } from 'rxjs/operators';
import { ProfessorsScheduleService } from 'src/app/data-services/professors-schedule.service';
import { MANUFACTURE_LAB_ARRAY, DESIGN_LAB_ARRAY, THERMO_LAB_ARRAY, FLUIDS_LAB_ARRAY } from '../../models/laboratories';

export interface ProfessorScheduleTemplate {
  weekday: string;
  startHour1: number;
  endHour1: number;
  startHour2: number;
  endHour2: number;
}

@Component({
  selector: 'app-professors-schedule',
  templateUrl: './professors-schedule.component.html',
  styleUrls: ['./professors-schedule.component.scss']
})


export class ProfessorsScheduleComponent implements OnInit, OnDestroy {

  constructor(
    public _professorsSchedule: ProfessorsScheduleService,
  ) { }

  public professor1Schedule = [];
  public professor1: ProfessorScheduleTemplate;
  public professor2Schedule = [];
  public professor2: ProfessorScheduleTemplate;

  hour: Number;
  minutes: Number;
  seconds: Number;
  day: Number;

  public subscription1: Subscription;
  public subscription2: Subscription;

  ngOnInit(): void {
    const time = new Date;
    this.day = time.getDay();

    // setInterval(() => {
    this.seconds = time.getSeconds();
    this.minutes = time.getMinutes();
    this.hour = time.getHours();

    // }, 1000);


    this.subscriptions();
    this.weekdayName();




  }

  public floor: string;

  weekdayName() {  // returns the current day number from Time function
    const dayNumber = this.day as number;
    let dayName;
    switch (dayNumber) {
      case 0:
        dayName = 'monday';
        break;
      case 1:
        dayName = 'monday';
        break;
      case 2:
        dayName = 'monday';
        break;
      case 3:
        dayName = 'monday';
        break;
      case 4:
        dayName = 'monday';
        break;
      case 5:
        dayName = 'monday';
        break;
      case 6:
        dayName = 'monday';
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
        cubicle = this.professor1;
        break;
      case 'cubicle2':
        cubicle = this.professor1;
        break;
      default:
        break;
    }
    return cubicle;
  }


  spinnerLoading: boolean = true;
  subscriptions() {
    this.subscription1 = this._professorsSchedule.professor1Data().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.professor1Schedule.push(element.payload.doc.data()); // for each element inside firebase professor1Data array, it pushes the contnet into professor1Schedule(local variable)
        this.professor1 = this.professor1Schedule.filter(x => x.day == this.weekdayName()).shift(); // compares current weekday to the weekdays inside array and assigns that complete object in which that weekday is contained to a local professor1 (local variable) it also takes the object out of the array with .reduce
      });
      // this.cubicleData('teacher1');
      // console.log(this.professor1);
    });

    this.subscription2 = this._professorsSchedule.professor2Data().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.professor2Schedule.push(element.payload.doc.data()); // for each element inside firebase professor1Data array, it pushes the contnet into professor1Schedule(local variable)
        this.professor2 = this.professor2Schedule.filter(x => x.day == this.weekdayName()).shift(); // compares current weekday to the weekdays inside array and assigns that complete object in which that weekday is contained to a local professor1 (local variable) it also takes the object out of the array with .reduce
      });
      this.test();
      this.spinnerLoading = false;
    });


  }


  cubicleStatus(name: string): string {
    const CUBICLE_DATA = this.cubicleData(name);
    if ((this.hour > CUBICLE_DATA.startHour1 && this.hour < CUBICLE_DATA.endHour1) ||
       (this.hour > CUBICLE_DATA.startHour2 && this.hour < CUBICLE_DATA.endHour2)){
      return 'Cubiculo disponible';
    }
    else {
      return 'Cubiculo no disponible' + this.hour;
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



  test() {
    if (this.professor1) {
      console.log(this.professor1.endHour1);
      console.log(this.professor2.endHour1);
    }
    else {
      console.log(this.professor1);
    }
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
  }
}
