import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { first } from 'rxjs/operators';
import { ProfessorsScheduleService } from 'src/app/data-services/professors-schedule.service';

import { ProfessorsScheduleComponent } from 'src/app/views/professors-schedule/professors-schedule.component';
export interface LaboratoriesTemplate {
  weekday: string;
  className: string;
  teacher: string;
  startHour: number;
  endHour: number;
}

@Component({
  selector: 'app-dialog-cubicle',
  templateUrl: './dialog-cubicle.component.html',
  styleUrls: ['./dialog-cubicle.component.scss']
})
export class DialogCubicleComponent {

  constructor(
    private dialog: MatDialog,
    public _professorsSchedule: ProfessorsScheduleService,) { }

  openDialog(name) {
    switch (name) {
      case 'cubicle1':
        this.dialog.open(DialogContentCubicle1);
        break;
      case 'cubicle2':
        this.dialog.open(DialogContentCubicle2);
        break;
      case 'cubicle3':
        this.dialog.open(DialogContentCubicle3);
        break;
      case 'cubicle4':
        this.dialog.open(DialogContentCubicle4);
        break;
      case 'cubicle5':
        this.dialog.open(DialogContentCubicle5);
        break;
      case 'cubicle6':
        this.dialog.open(DialogContentCubicle6);
        break;
      case 'cubicle7':
        this.dialog.open(DialogContentCubicle7);
        break;
      case 'cubicle8':
        this.dialog.open(DialogContentCubicle8);
        break;
      default:
        break;
    }
  }
}



@Component({
  templateUrl: './dialog-cubicle-content/cubicle1.html',
  styleUrls: ['./dialog-cubicle.component.scss']
})
export class DialogContentCubicle1 implements OnInit {
  constructor(
    public _professorsSchedule: ProfessorsScheduleService,) { }

  public isWeekend: boolean = false;
  public displayedColumns: string[] = ['day', 'startHour1', 'endHour1', 'startHour2', 'endHour2'];
  public day: Number;
  public cbcData1 = [];
  public dataSourceCubicle1;
  public loaded = false;

  ngOnInit() {
    this._professorsSchedule.cubicle1().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData1.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });
      this.dataSourceCubicle1 = new MatTableDataSource(this.cbcData1);
      this.cbcData1.sort((a, b) => a.dayNumber - b.dayNumber);
    });

    if (this.dayNumber() == 6 || this.dayNumber() == 0) {
      this.isWeekend = true;
    }
  }

  dayNumber(): Number {
    const time = new Date;
    this.day = time.getDay();
    return this.day;
  }
}



@Component({
  templateUrl: './dialog-cubicle-content/cubicle2.html',
  styleUrls: ['./dialog-cubicle.component.scss']
})
export class DialogContentCubicle2 implements  OnInit{
  constructor(
    public _professorsSchedule: ProfessorsScheduleService,) {}

  isWeekend: boolean = false;
  displayedColumns: string[] = ['day', 'startHour1', 'endHour1', 'startHour2', 'endHour2'];
  day: Number;
  public cbcData2 = [];

  public dataSourceCubicle2;
  
  loaded = false;


  ngOnInit() {
  this._professorsSchedule.cubicle2().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData2.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });
      this.dataSourceCubicle2 = new MatTableDataSource(this.cbcData2);
      this.cbcData2.sort((a,b)=> a.dayNumber - b.dayNumber);
    });

    if(this.dayNumber() == 6 || this.dayNumber() == 0){
      this.isWeekend = true;
    }
  }

  dayNumber(): Number{
    const time = new Date;
    this.day = time.getDay() ;
    return this.day;
 }
}




@Component({
  templateUrl: './dialog-cubicle-content/cubicle3.html',
  styleUrls: ['./dialog-cubicle.component.scss']
})
export class DialogContentCubicle3 implements  OnInit{
  constructor(
    public _professorsSchedule: ProfessorsScheduleService,) {}

  isWeekend: boolean = false;
  displayedColumns: string[] = ['day', 'startHour1', 'endHour1', 'startHour2', 'endHour2'];
  day: Number;
  public cbcData3 = [];

  public dataSourceCubicle3;
  
  loaded = false;


  ngOnInit() {
  this._professorsSchedule.cubicle3().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData3.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });
      this.dataSourceCubicle3 = new MatTableDataSource(this.cbcData3);
      this.cbcData3.sort((a,b)=> a.dayNumber - b.dayNumber);
    });

    if(this.dayNumber() == 6 || this.dayNumber() == 0){
      this.isWeekend = true;
    }
  }

  dayNumber(): Number{
    const time = new Date;
    this.day = time.getDay() ;
    return this.day;
 }
}



@Component({
  templateUrl: './dialog-cubicle-content/cubicle4.html',
  styleUrls: ['./dialog-cubicle.component.scss']
})
export class DialogContentCubicle4 implements  OnInit{
  constructor(
    public _professorsSchedule: ProfessorsScheduleService,) {}

  isWeekend: boolean = false;
  displayedColumns: string[] = ['day', 'startHour1', 'endHour1', 'startHour2', 'endHour2'];
  day: Number;
  public cbcData4 = [];

  public dataSourceCubicle4;
  
  loaded = false;


  ngOnInit() {
  this._professorsSchedule.cubicle4().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData4.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });
      this.dataSourceCubicle4 = new MatTableDataSource(this.cbcData4);
      this.cbcData4.sort((a,b)=> a.dayNumber - b.dayNumber);
    });

    if(this.dayNumber() == 6 || this.dayNumber() == 0){
      this.isWeekend = true;
    }
  }

  dayNumber(): Number{
    const time = new Date;
    this.day = time.getDay() ;
    return this.day;
 }
}



@Component({
  templateUrl: './dialog-cubicle-content/cubicle5.html',
  styleUrls: ['./dialog-cubicle.component.scss']
})
export class DialogContentCubicle5 implements  OnInit{
  constructor(
    public _professorsSchedule: ProfessorsScheduleService,) {}

  isWeekend: boolean = false;
  displayedColumns: string[] = ['day', 'startHour1', 'endHour1', 'startHour2', 'endHour2'];
  day: Number;
  public cbcData5 = [];

  public dataSourceCubicle5;
  
  loaded = false;


  ngOnInit() {
  this._professorsSchedule.cubicle5().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData5.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });
      this.dataSourceCubicle5 = new MatTableDataSource(this.cbcData5);
      this.cbcData5.sort((a,b)=> a.dayNumber - b.dayNumber);
    });

    if(this.dayNumber() == 6 || this.dayNumber() == 0){
      this.isWeekend = true;
    }
  }

  dayNumber(): Number{
    const time = new Date;
    this.day = time.getDay() ;
    return this.day;
 }
}



@Component({
  templateUrl: './dialog-cubicle-content/cubicle6.html',
  styleUrls: ['./dialog-cubicle.component.scss']
})
export class DialogContentCubicle6 implements  OnInit{
  constructor(
    public _professorsSchedule: ProfessorsScheduleService,) {}

  isWeekend: boolean = false;
  displayedColumns: string[] = ['day', 'startHour1', 'endHour1', 'startHour2', 'endHour2'];
  day: Number;
  public cbcData6 = [];

  public dataSourceCubicle6;
  
  loaded = false;


  ngOnInit() {
  this._professorsSchedule.cubicle6().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData6.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });
      this.dataSourceCubicle6 = new MatTableDataSource(this.cbcData6);
      this.cbcData6.sort((a,b)=> a.dayNumber - b.dayNumber);
    });

    if(this.dayNumber() == 6 || this.dayNumber() == 0){
      this.isWeekend = true;
    }
  }

  dayNumber(): Number{
    const time = new Date;
    this.day = time.getDay() ;
    return this.day;
 }
}



@Component({
  templateUrl: './dialog-cubicle-content/cubicle7.html',
  styleUrls: ['./dialog-cubicle.component.scss']
})
export class DialogContentCubicle7 implements  OnInit{
  constructor(
    public _professorsSchedule: ProfessorsScheduleService,) {}

  isWeekend: boolean = false;
  displayedColumns: string[] = ['day', 'startHour1', 'endHour1', 'startHour2', 'endHour2'];
  day: Number;
  public cbcData7 = [];

  public dataSourceCubicle7;
  
  loaded = false;


  ngOnInit() {
  this._professorsSchedule.cubicle7().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData7.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });
      this.dataSourceCubicle7 = new MatTableDataSource(this.cbcData7);
      this.cbcData7.sort((a,b)=> a.dayNumber - b.dayNumber);
    });

    if(this.dayNumber() == 6 || this.dayNumber() == 0){
      this.isWeekend = true;
    }
  }

  dayNumber(): Number{
    const time = new Date;
    this.day = time.getDay() ;
    return this.day;
 }
}




@Component({
  templateUrl: './dialog-cubicle-content/cubicle8.html',
  styleUrls: ['./dialog-cubicle.component.scss']
})
export class DialogContentCubicle8 implements  OnInit{
  constructor(
    public _professorsSchedule: ProfessorsScheduleService,) {}

  isWeekend: boolean = false;
  displayedColumns: string[] = ['day', 'startHour1', 'endHour1', 'startHour2', 'endHour2'];
  day: Number;
  public cbcData8 = [];

  public dataSourceCubicle8;
  
  loaded = false;


  ngOnInit() {
  this._professorsSchedule.cubicle8().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData8.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });
      this.dataSourceCubicle8 = new MatTableDataSource(this.cbcData8);
      this.cbcData8.sort((a,b)=> a.dayNumber - b.dayNumber);
    });

    if(this.dayNumber() == 6 || this.dayNumber() == 0){
      this.isWeekend = true;
    }
  }

  dayNumber(): Number{
    const time = new Date;
    this.day = time.getDay() ;
    return this.day;
 }
}