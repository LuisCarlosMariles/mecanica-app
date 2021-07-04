import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
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
export const MANUFACTURE_LAB_ARRAY: LaboratoriesTemplate[] = [

  {weekday: 'Lunes', className: 'Mecanismos', teacher: 'Maestro 1', startHour: 8, endHour: 9},
  {weekday: 'Lunes', className: 'Manufactura', teacher: 'Maestra 2', startHour: 9, endHour: 11},
  {weekday: 'Lunes', className: 'Manufactura Asistida', teacher: 'Maestro 3', startHour: 11, endHour: 13},
  {weekday: 'Lunes', className: 'CNC', teacher: 'Maestra 4', startHour: 15, endHour: 17}]

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
      // case 'design':
      //   this.dialog.open();
      //   break;
      // case 'fluids':
      //   this.dialog.open();
      //   break;
      // case 'thermo':
      //   this.dialog.open();
      //   break;
      default:
        break;
    }

  }
}



@Component({
  templateUrl: './dialog-cubicle-content/cubicle1.html',
  styleUrls: ['./dialog-cubicle.component.scss']
})
export class DialogContentCubicle1 implements OnInit{
  constructor(
    public _professorsSchedule: ProfessorsScheduleService,) {}

  
  isWeekend: boolean = false;
  man = MANUFACTURE_LAB_ARRAY;
  dataSourceDesign = new MatTableDataSource(this.man);



  // public DATA = this.cbcData1;
  displayedColumns: string[] = ['weekday', 'startHour', 'endHour', 'className', 'teacher'];


  @ViewChild(MatSort) sort: MatSort;

  day: Number;
  public cbcData1 = [];
  public cbcData2 = [];
  public cbcData3 = [];
  public cbcData4 = [];
  public cbcData5 = [];
  public cbcData6 = [];
  public cbcData7 = [];

  public dataSourceCubicle1;
  
    loaded = false;
  ngOnInit() {
    this.dataSourceDesign.sort = this.sort;
      this._professorsSchedule.cubicle1().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData1.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });
      this.loaded = true;
      this.dataSourceCubicle1 = new MatTableDataSource(this.cbcData1);
    });

  this._professorsSchedule.cubicle2().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData2.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });

      // this.spinnerLoading = false;
    });

    this._professorsSchedule.cubicle3().pipe(first()).subscribe(data => {
      data.forEach(element => {
      });
      // this.spinnerLoading = false;
    });

    this._professorsSchedule.cubicle4().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData4.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });
      // this.spinnerLoading = false;
    });

    this._professorsSchedule.cubicle5().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData5.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });
    });

    this._professorsSchedule.cubicle6().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData6.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });
    });

    this._professorsSchedule.cubicle7().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData7.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });
    });

    if(this.dayNumber() == 5 || this.dayNumber() == 5){
      this.isWeekend = true;
    }
  }
  dayNumber(): Number{
    const time = new Date;
    this.day = time.getDay() ;
    return this.day;
 }

}
