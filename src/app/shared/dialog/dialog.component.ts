import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MANUFACTURE_LAB_ARRAY, DESIGN_LAB_ARRAY, THERMO_LAB_ARRAY, FLUIDS_LAB_ARRAY, LaboratoriesTemplate } from '../../models/laboratories';
import { ScheduleMapService } from 'src/app/data-services/schedule-map.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(private dialog: MatDialog) {
  }

  openDialog(name) {


    switch (name) {
      case 'mantenimiento':
        this.dialog.open(DialogContentMantenimiento);
        break;
      case 'celdaManufactura':
        this.dialog.open(DialogContentCeldaManufactura);
        break;
      case 'maquinasHerramientas':
        this.dialog.open(DialogContentMaquinasHerramientas);
        break;
      case 'cienciasMateriales':
        this.dialog.open(DialogContentCienciasMateriales);
        break;
      case 'mecanicaFluidos':
        this.dialog.open(DialogContentMecanicaFluidos);
        break;
      case 'salaAudiovisual':
        this.dialog.open(DialogContentSalaAudiovisual);
        break;
      case 'mecanicaMateriales':
        this.dialog.open(DialogContentMecanicaMateriales);
        break;
      case 'refrigeracion':
        this.dialog.open(DialogContentRefrigeracion);
        break;
      case 'laboratorioProyectos':
        this.dialog.open(DialogContentLaboratorioProyectos);
        break;
      case 'salaComputo':
        this.dialog.open(DialogContentSalaComputo);
        break;
      case 'cnc':
        this.dialog.open(DialogContentCnc);
        break;
      default:
        break;
    }

  }

}































@Component({
  templateUrl: './dialog-contents/dialog-content-mantenimiento.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogContentMantenimiento implements OnInit{
  constructor(
    public _scheduleMap: ScheduleMapService,
  ) {}

  isWeekend: boolean = false;

  displayedColumns: string[] = ['weekday', 'startHour', 'endHour', 'className', 'teacher'];
  public dataSourceMantenimiento;
  

  @ViewChild(MatSort) sort: MatSort;

  day: Number;

  ngOnInit() {
    if(this.dayNumber() == 0 || this.dayNumber() == 6){
      this.isWeekend = true;
    }

    this.subscriptions();
  }

  public loadCompleted = false;
  subscriptions(){
    this._scheduleMap.mantenimientoClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class
      let dayData = data.map(element => element.payload.doc.get(this.weekdayNameForDialog())).shift();
      this.dataSourceMantenimiento = new MatTableDataSource(dayData);
      this.dataSourceMantenimiento.sort = this.sort;
      this.loadCompleted = true;
    });
  }

  dayNumber(): Number{
    const time = new Date;
    this.day = time.getDay();
    return this.day;
 }

 weekdayNameForDialog() {  // returns the current day number from Time function
  const dayNumber = this.dayNumber();
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
  // console.log(dayName);
  return dayName;
}
}










@Component({
  templateUrl: './dialog-contents/dialog-content-celdaManufactura.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogContentCeldaManufactura implements OnInit{constructor(
  public _scheduleMap: ScheduleMapService,
) {}

isWeekend: boolean = false;

displayedColumns: string[] = ['weekday', 'startHour', 'endHour', 'className', 'teacher'];
public dataSourceCeldaManufactura;


@ViewChild(MatSort) sort: MatSort;

day: Number;

ngOnInit() {
  if(this.dayNumber() == 0 || this.dayNumber() == 6){
    this.isWeekend = true;
  }

  this.subscriptions();
}

public loadCompleted = false;
subscriptions(){
  this._scheduleMap.celdaManufacturaClassroom().pipe(first()).subscribe(data => { 
    let dayData = data.map(element => element.payload.doc.get(this.weekdayNameForDialog())).shift();
    this.dataSourceCeldaManufactura = new MatTableDataSource(dayData);
    this.dataSourceCeldaManufactura.sort = this.sort;
    this.loadCompleted = true;
  });
}

dayNumber(): Number{
  const time = new Date;
  this.day = time.getDay();
  return this.day;
}

weekdayNameForDialog() {  // returns the current day number from Time function
const dayNumber = this.dayNumber();
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
// console.log(dayName);
return dayName;
}
}



@Component({
  templateUrl: './dialog-contents/dialog-content-maquinasHerramientas.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogContentMaquinasHerramientas implements OnInit {
  constructor(
    public _scheduleMap: ScheduleMapService,
  ) {}

  isWeekend: boolean = false;

  displayedColumns: string[] = ['weekday', 'startHour', 'endHour', 'className', 'teacher'];
  public dataSourceMaquinasHerramientas;
  

  @ViewChild(MatSort) sort: MatSort;

  day: Number;

  ngOnInit() {
    if(this.dayNumber() == 0 || this.dayNumber() == 6){
      this.isWeekend = true;
    }

    this.subscriptions();
  }

  public loadCompleted = false;
  subscriptions(){
    this._scheduleMap.maquinasHerramientasClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class
      let dayData = data.map(element => element.payload.doc.get('friday')).shift();
      this.dataSourceMaquinasHerramientas = new MatTableDataSource(dayData);
      this.dataSourceMaquinasHerramientas.sort = this.sort;
      this.loadCompleted = true;
    });
  }

  dayNumber(): Number{
    const time = new Date;
    this.day = time.getDay();
    return this.day;
 }

 weekdayNameForDialog() {  // returns the current day number from Time function
  const dayNumber = this.dayNumber();
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
  // console.log(dayName);
  return dayName;
}
}



@Component({
  templateUrl: './dialog-contents/dialog-content-cienciasMateriales.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogContentCienciasMateriales implements OnInit{
  constructor(
    public _scheduleMap: ScheduleMapService,
  ) {}

  isWeekend: boolean = false;
  THERMO_ARRAY = THERMO_LAB_ARRAY.filter(x => x.weekday == this.weekdayNameForDialog());
  displayedColumns: string[] = ['weekday', 'startHour', 'endHour', 'className', 'teacher'];
  public dataSourceCienciasMateriales;
  

  @ViewChild(MatSort) sort: MatSort;

  day: Number;

  ngOnInit() {
    if(this.dayNumber() == 0 || this.dayNumber() == 6){
      this.isWeekend = true;
    }

    this.subscriptions();
  }

  public loadCompleted = false;
  subscriptions(){
    this._scheduleMap.cienciasMaterialesClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class
      let dayData = data.map(element => element.payload.doc.get(this.weekdayNameForDialog())).shift();
      this.dataSourceCienciasMateriales = new MatTableDataSource(dayData);
      this.dataSourceCienciasMateriales.sort = this.sort;
      this.loadCompleted = true;
    });
  }

  dayNumber(): Number{
    const time = new Date;
    this.day = time.getDay();
    return this.day;
 }

 weekdayNameForDialog() {  // returns the current day number from Time function
  const dayNumber = this.dayNumber();
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
  // console.log(dayName);
  return dayName;
}
}




@Component({
  templateUrl: './dialog-contents/dialog-content-mecanicaFluidos.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogContentMecanicaFluidos implements OnInit{
  constructor(
    public _scheduleMap: ScheduleMapService,
  ) {}

  isWeekend: boolean = false;
  THERMO_ARRAY = THERMO_LAB_ARRAY.filter(x => x.weekday == this.weekdayNameForDialog());
  displayedColumns: string[] = ['weekday', 'startHour', 'endHour', 'className', 'teacher'];
  public dataSourceMecanicaFluidos;
  

  @ViewChild(MatSort) sort: MatSort;

  day: Number;

  ngOnInit() {
    if(this.dayNumber() == 0 || this.dayNumber() == 6){
      this.isWeekend = true;
    }

    this.subscriptions();
  }

  public loadCompleted = false;
  subscriptions(){
    this._scheduleMap.mecanicaFluidosClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class
      let dayData = data.map(element => element.payload.doc.get(this.weekdayNameForDialog())).shift();
      this.dataSourceMecanicaFluidos = new MatTableDataSource(dayData);
      this.dataSourceMecanicaFluidos.sort = this.sort;
      this.loadCompleted = true;
    });
  }

  dayNumber(): Number{
    const time = new Date;
    this.day = time.getDay();
    return this.day;
 }

 weekdayNameForDialog() {  // returns the current day number from Time function
  const dayNumber = this.dayNumber();
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
  // console.log(dayName);
  return dayName;
}
}




@Component({
  templateUrl: './dialog-contents/dialog-content-salaAudiovisual.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogContentSalaAudiovisual implements OnInit{
  constructor(
    public _scheduleMap: ScheduleMapService,
  ) {}

  isWeekend: boolean = false;
  displayedColumns: string[] = ['weekday', 'startHour', 'endHour', 'className', 'teacher'];
  
  public dataSourceSalaAudivisual;
  

  @ViewChild(MatSort) sort: MatSort;

  day: Number;

  ngOnInit() {
    if(this.dayNumber() == 0 || this.dayNumber() == 6){
      this.isWeekend = true;
    }

    this.subscriptions();
  }

  public loadCompleted = false;
  subscriptions(){
    this._scheduleMap.salaAudiovisualClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class
      let dayData = data.map(element => element.payload.doc.get(this.weekdayNameForDialog())).shift();
      this.dataSourceSalaAudivisual = new MatTableDataSource(dayData);
      this.dataSourceSalaAudivisual.sort = this.sort;
      this.loadCompleted = true;
    });
  }

  dayNumber(): Number{
    const time = new Date;
    this.day = time.getDay();
    return this.day;
 }

 weekdayNameForDialog() {  // returns the current day number from Time function
  const dayNumber = this.dayNumber();
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
  // console.log(dayName);
  return dayName;
}
}



@Component({
  templateUrl: './dialog-contents/dialog-content-mecanicaMateriales.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogContentMecanicaMateriales implements OnInit{
  constructor(
    public _scheduleMap: ScheduleMapService,
  ) {}

  isWeekend: boolean = false;

  displayedColumns: string[] = ['weekday', 'startHour', 'endHour', 'className', 'teacher'];
  public dataSourceMecanicaMateriales;
  

  @ViewChild(MatSort) sort: MatSort;

  day: Number;

  ngOnInit() {
    if(this.dayNumber() == 0 || this.dayNumber() == 6){
      this.isWeekend = true;
    }

    this.subscriptions();
  }

  public loadCompleted = false;
  subscriptions(){
    this._scheduleMap.mecanicaMaterialesClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class
      let dayData = data.map(element => element.payload.doc.get(this.weekdayNameForDialog())).shift();
      this.dataSourceMecanicaMateriales = new MatTableDataSource(dayData);
      this.dataSourceMecanicaMateriales.sort = this.sort;
      this.loadCompleted = true;
    });
  }

  dayNumber(): Number{
    const time = new Date;
    this.day = time.getDay();
    return this.day;
 }

 weekdayNameForDialog() {  // returns the current day number from Time function
  const dayNumber = this.dayNumber();
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
  // console.log(dayName);
  return dayName;
}
}



@Component({
  templateUrl: './dialog-contents/dialog-content-refrigeracion.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogContentRefrigeracion implements OnInit{
  constructor(
    public _scheduleMap: ScheduleMapService,
  ) {}

  isWeekend: boolean = false;

  displayedColumns: string[] = ['weekday', 'startHour', 'endHour', 'className', 'teacher'];
  public dataSourceRefrigeracion;
  

  @ViewChild(MatSort) sort: MatSort;

  day: Number;

  ngOnInit() {
    if(this.dayNumber() == 0 || this.dayNumber() == 6){
      this.isWeekend = true;
    }

    this.subscriptions();
  }

  public loadCompleted = false;
  subscriptions(){
    this._scheduleMap.refrigeracionClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class
      let dayData = data.map(element => element.payload.doc.get(this.weekdayNameForDialog())).shift();
      this.dataSourceRefrigeracion = new MatTableDataSource(dayData);
      this.dataSourceRefrigeracion.sort = this.sort;
      this.loadCompleted = true;
    });
  }

  dayNumber(): Number{
    const time = new Date;
    this.day = time.getDay();
    return this.day;
 }

 weekdayNameForDialog() {  // returns the current day number from Time function
  const dayNumber = this.dayNumber();
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
  // console.log(dayName);
  return dayName;
}
}




//************************************************************************************************ SALA DE ASESORIAS */

//************************************************************************************************ SALA DE ASESORIAS */

//************************************************************************************************ SALA DE ASESORIAS */

//************************************************************************************************ SALA DE ASESORIAS */




@Component({
  templateUrl: './dialog-contents/dialog-content-laboratorioProyectos.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogContentLaboratorioProyectos implements OnInit{
  constructor(
    public _scheduleMap: ScheduleMapService,
  ) {}

  isWeekend: boolean = false;

  displayedColumns: string[] = ['weekday', 'startHour', 'endHour', 'className', 'teacher'];
  public dataSourceLaboratoriosProyectos;
  

  @ViewChild(MatSort) sort: MatSort;

  day: Number;

  ngOnInit() {
    if(this.dayNumber() == 0 || this.dayNumber() == 6){
      this.isWeekend = true;
    }

    this.subscriptions();
  }

  public loadCompleted = false;
  subscriptions(){
    this._scheduleMap.laboratorioProyectosClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class
      let dayData = data.map(element => element.payload.doc.get(this.weekdayNameForDialog())).shift();
      this.dataSourceLaboratoriosProyectos = new MatTableDataSource(dayData);
      this.dataSourceLaboratoriosProyectos.sort = this.sort;
      this.loadCompleted = true;
    });
  }

  dayNumber(): Number{
    const time = new Date;
    this.day = time.getDay();
    return this.day;
 }

 weekdayNameForDialog() {  // returns the current day number from Time function
  const dayNumber = this.dayNumber();
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
  // console.log(dayName);
  return dayName;
}
}




@Component({
  templateUrl: './dialog-contents/dialog-content-salaComputo.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogContentSalaComputo implements OnInit{
  constructor(
    public _scheduleMap: ScheduleMapService,
  ) {}

  isWeekend: boolean = false;

  displayedColumns: string[] = ['weekday', 'startHour', 'endHour', 'className', 'teacher'];
  public dataSourceSalaComputo;
  

  @ViewChild(MatSort) sort: MatSort;

  day: Number;

  ngOnInit() {
    if(this.dayNumber() == 0 || this.dayNumber() == 6){
      this.isWeekend = true;
    }

    this.subscriptions();
  }

  public loadCompleted = false;
  subscriptions(){
    this._scheduleMap.salaComputoClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class
      let dayData = data.map(element => element.payload.doc.get(this.weekdayNameForDialog())).shift();
      this.dataSourceSalaComputo = new MatTableDataSource(dayData);
      this.dataSourceSalaComputo.sort = this.sort;
      this.loadCompleted = true;
    });
  }

  dayNumber(): Number{
    const time = new Date;
    this.day = time.getDay();
    return this.day;
 }

 weekdayNameForDialog() {  // returns the current day number from Time function
  const dayNumber = this.dayNumber();
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
  // console.log(dayName);
  return dayName;
}
}




@Component({
  templateUrl: './dialog-contents/dialog-content-cnc.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogContentCnc implements OnInit{
  constructor(
    public _scheduleMap: ScheduleMapService,
  ) {}

  isWeekend: boolean = false;

  displayedColumns: string[] = ['weekday', 'startHour', 'endHour', 'className', 'teacher'];
  public dataSourceCnc;
  

  @ViewChild(MatSort) sort: MatSort;

  day: Number;

  ngOnInit() {
    if(this.dayNumber() == 0 || this.dayNumber() == 6){
      this.isWeekend = true;
    }

    this.subscriptions();
  }

  public loadCompleted = false;
  subscriptions(){
    this._scheduleMap.cncClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class
      let dayData = data.map(element => element.payload.doc.get(this.weekdayNameForDialog())).shift();
      this.dataSourceCnc = new MatTableDataSource(dayData);
      this.dataSourceCnc.sort = this.sort;
      this.loadCompleted = true;
    });
  }

  dayNumber(): Number{
    const time = new Date;
    this.day = time.getDay();
    return this.day;
 }

 weekdayNameForDialog() {  // returns the current day number from Time function
  const dayNumber = this.dayNumber();
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
  // console.log(dayName);
  return dayName;
}
}












































// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { DialogComponent } from './dialog.component';

// describe('DialogComponent', () => {
//   let component: DialogComponent;
//   let fixture: ComponentFixture<DialogComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ DialogComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(DialogComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
