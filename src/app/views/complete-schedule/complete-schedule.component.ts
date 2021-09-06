import { Component, OnInit } from '@angular/core';
import { MANUFACTURE_LAB_ARRAY, DESIGN_LAB_ARRAY, THERMO_LAB_ARRAY, FLUIDS_LAB_ARRAY, LaboratoriesTemplate } from '../../models/laboratories';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ScheduleMapService } from 'src/app/data-services/schedule-map.service';
import { ClassroomTemplate } from '../schedule-map/schedule-map.component';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-complete-schedule',
  templateUrl: './complete-schedule.component.html',
  styleUrls: ['./complete-schedule.component.scss']
})
export class CompleteScheduleComponent implements OnInit {

  constructor(
    public _scheduleMap: ScheduleMapService
  ) { }

  ngOnInit(): void {
    this.subscriptions();
  }
  
  MANUFACTURE_ARRAY = MANUFACTURE_LAB_ARRAY;
  DESIGN_ARRAY = DESIGN_LAB_ARRAY;
  THERMO_ARRAY = THERMO_LAB_ARRAY;
  FLUIDS_ARRAY = FLUIDS_LAB_ARRAY


  displayedColumns: string[] = ['weekday', 'startHour', 'endHour', 'className', 'teacher'];
  dataSourceManufacture = new MatTableDataSource(this.MANUFACTURE_ARRAY);
  dataSourceDesign = new MatTableDataSource(this.DESIGN_ARRAY);
  dataSourceThermo = new MatTableDataSource(this.THERMO_ARRAY);
  dataSourceFluids = new MatTableDataSource(this.FLUIDS_ARRAY);


  manufactureClassesFromThatDay(day: string) {

    this.dataSourceManufacture = new MatTableDataSource(this.MANUFACTURE_ARRAY.filter(x => x.weekday == day));  
    return this.dataSourceManufacture;
  }

  

  thermoClassesFromThatDay(day: string) {
    this.dataSourceThermo = new MatTableDataSource(this.THERMO_ARRAY.filter(x => x.weekday == day));  
    return this.dataSourceThermo;
  }

  designClassesFromThatDay(day: string) {
    this.dataSourceDesign = new MatTableDataSource(this.DESIGN_ARRAY.filter(x => x.weekday == day));  
    return this.dataSourceDesign;
  }

  fluidsClassesFromThatDay(day: string) {
    this.dataSourceFluids = new MatTableDataSource(this.FLUIDS_ARRAY.filter(x => x.weekday == day));  
    return this.dataSourceFluids;
  }



  public classData1;
  public dataSource1;
  public classData2;
  public dataSource2;
  public classData3;
  public dataSource3;
  public classData4;
  public dataSource4;
  public classData5;
  public dataSource5;
  public classData6;
  public dataSource6;
  public classData7;
  public dataSource7;
  public classData8;
  public dataSource8;
  public classData9;
  public dataSource9
  public classData10;
  public dataSource10
  public classData11;
  public dataSource11
  public classData12;
  public dataSource12

  daysArray = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']; //delete

  public loadCompleted = false;


  public subscriptions(){

    this._scheduleMap.salaAudiovisualClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class

      // let completeClassroomData = data.map(element => element.payload.doc.get('friday')).shift();

      // data.forEach(element => {
      //   this.classData1.push(element.payload.doc.data());
      // })

      let completeClassroomData: Array<Object> = data.map(element => element.payload.doc.data());
      let allDays = completeClassroomData[0]; //Takes first element of array of objects (the days)
      let arrayOfArrays = Object.values(allDays) // Fills Array with data arrays with no day name, all information is indepentend in its own array
      let mergedObjects = [].concat.apply([], arrayOfArrays); //separates information from arrays into individual objects

      // this.classData1 = new MatTableDataSource(merged.filter(x => x.dayNumber == 5))
      this.classData1 = mergedObjects;

      // this.dataSource1 = completeClassroomData.filter(x => x == day)


      
      // console.log(mergedObjects);    //commented on final version
      // console.log(completeClassroomData[0]);    //commented on final version
      // console.log(mergedObjects);    //commented on final version
    });

    
    this._scheduleMap.mecanicaFluidosClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class

      let completeClassroomData: Array<Object> = data.map(element => element.payload.doc.data());
      let allDays = completeClassroomData[0]; //Takes first element of array of objects (the days)
      let arrayOfArrays = Object.values(allDays) // Fills Array with data arrays with no day name, all information is indepentend in its own array
      let mergedObjects = [].concat.apply([], arrayOfArrays); //separates information from arrays into individual objects

      this.classData2 = mergedObjects;

      // this.dataSource1 = completeClassroomData.filter(x => x == day)

    });

    this._scheduleMap.cienciasMaterialesClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class

      let completeClassroomData: Array<Object> = data.map(element => element.payload.doc.data());
      let allDays = completeClassroomData[0]; //Takes first element of array of objects (the days)
      let arrayOfArrays = Object.values(allDays) // Fills Array with data arrays with no day name, all information is indepentend in its own array
      let mergedObjects = [].concat.apply([], arrayOfArrays); //separates information from arrays into individual objects

      this.classData3 = mergedObjects;

      // this.dataSource1 = completeClassroomData.filter(x => x == day)
    });

    this._scheduleMap.maquinasHerramientasClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class

      let completeClassroomData: Array<Object> = data.map(element => element.payload.doc.data());
      let allDays = completeClassroomData[0]; //Takes first element of array of objects (the days)
      let arrayOfArrays = Object.values(allDays) // Fills Array with data arrays with no day name, all information is indepentend in its own array
      let mergedObjects = [].concat.apply([], arrayOfArrays); //separates information from arrays into individual objects

      this.classData4 = mergedObjects;

      // this.dataSource1 = completeClassroomData.filter(x => x == day)
    });

    this._scheduleMap.celdaManufacturaClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class

      let completeClassroomData: Array<Object> = data.map(element => element.payload.doc.data());
      let allDays = completeClassroomData[0]; //Takes first element of array of objects (the days)
      let arrayOfArrays = Object.values(allDays) // Fills Array with data arrays with no day name, all information is indepentend in its own array
      let mergedObjects = [].concat.apply([], arrayOfArrays); //separates information from arrays into individual objects

      this.classData5 = mergedObjects;

      // this.dataSource1 = completeClassroomData.filter(x => x == day)
    });
    
    this._scheduleMap.mantenimientoClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class

      let completeClassroomData: Array<Object> = data.map(element => element.payload.doc.data());
      let allDays = completeClassroomData[0]; //Takes first element of array of objects (the days)
      let arrayOfArrays = Object.values(allDays) // Fills Array with data arrays with no day name, all information is indepentend in its own array
      let mergedObjects = [].concat.apply([], arrayOfArrays); //separates information from arrays into individual objects

      this.classData6 = mergedObjects;

      // this.dataSource1 = completeClassroomData.filter(x => x == day)
    });

    this._scheduleMap.mecanicaMaterialesClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class

      let completeClassroomData: Array<Object> = data.map(element => element.payload.doc.data());
      let allDays = completeClassroomData[0]; //Takes first element of array of objects (the days)
      let arrayOfArrays = Object.values(allDays) // Fills Array with data arrays with no day name, all information is indepentend in its own array
      let mergedObjects = [].concat.apply([], arrayOfArrays); //separates information from arrays into individual objects

      this.classData7 = mergedObjects;

      // this.dataSource1 = completeClassroomData.filter(x => x == day)
    });

    this._scheduleMap.refrigeracionClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class

      let completeClassroomData: Array<Object> = data.map(element => element.payload.doc.data());
      let allDays = completeClassroomData[0]; //Takes first element of array of objects (the days)
      let arrayOfArrays = Object.values(allDays) // Fills Array with data arrays with no day name, all information is indepentend in its own array
      let mergedObjects = [].concat.apply([], arrayOfArrays); //separates information from arrays into individual objects

      this.classData8 = mergedObjects;

      // this.dataSource1 = completeClassroomData.filter(x => x == day)
    });

    //*******************************************************PROYETOS CLASES */

    this._scheduleMap.salaComputoClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class

      let completeClassroomData: Array<Object> = data.map(element => element.payload.doc.data());
      let allDays = completeClassroomData[0]; //Takes first element of array of objects (the days)
      let arrayOfArrays = Object.values(allDays) // Fills Array with data arrays with no day name, all information is indepentend in its own array
      let mergedObjects = [].concat.apply([], arrayOfArrays); //separates information from arrays into individual objects

      this.classData10 = mergedObjects;
     

      // this.dataSource1 = completeClassroomData.filter(x => x == day)
    });

   
    this._scheduleMap.cncClassroom().pipe(first()).subscribe(data => { // subscribing to cienciasMateriales class

      let completeClassroomData: Array<Object> = data.map(element => element.payload.doc.data());
      let allDays = completeClassroomData[0]; //Takes first element of array of objects (the days)
      let arrayOfArrays = Object.values(allDays) // Fills Array with data arrays with no day name, all information is indepentend in its own array
      let mergedObjects = [].concat.apply([], arrayOfArrays); //separates information from arrays into individual objects

      this.classData11 = mergedObjects;
      this.loadCompleted = true;

      // this.dataSource1 = completeClassroomData.filter(x => x == day)
    });
  }








  salaAudiovisualClasses(dayNumberInput) {
    this.dataSource1 = new MatTableDataSource(this.classData1.filter(x => x.dayNumber == dayNumberInput));  
    return this.dataSource1;
  }

  mecanicaFluidosClasses(dayNumberInput) {
    this.dataSource2 = new MatTableDataSource(this.classData2.filter(x => x.dayNumber == dayNumberInput));  
    return this.dataSource2;
  }

  cienciasMaterialesClasses(dayNumberInput) {
    this.dataSource3 = new MatTableDataSource(this.classData3.filter(x => x.dayNumber == dayNumberInput));  
    return this.dataSource3;
  }

  maquinasHerramientasClasses(dayNumberInput) {
    this.dataSource4 = new MatTableDataSource(this.classData4.filter(x => x.dayNumber == dayNumberInput));  
    return this.dataSource4;
  }

  celdaManufacturaClasses(dayNumberInput) {
    this.dataSource5 = new MatTableDataSource(this.classData5.filter(x => x.dayNumber == dayNumberInput));  
    return this.dataSource5;
  }

  mantenimientoClasses(dayNumberInput) {
    this.dataSource6 = new MatTableDataSource(this.classData6.filter(x => x.dayNumber == dayNumberInput));  
    return this.dataSource6;
  }

  mecanicaMaterialesClasses(dayNumberInput) {
    this.dataSource7 = new MatTableDataSource(this.classData7.filter(x => x.dayNumber == dayNumberInput));  
    return this.dataSource7;
  }

  refrigeracionClasses(dayNumberInput) {
    this.dataSource8 = new MatTableDataSource(this.classData8.filter(x => x.dayNumber == dayNumberInput));  
    return this.dataSource8;
  }

  proyectosClasses(dayNumberInput) {
    this.dataSource9 = new MatTableDataSource(this.classData8.filter(x => x.dayNumber == dayNumberInput));  
    return this.dataSource9; //TODAVIA NO ESTA HECHO
  }

  salaComputoClasses(dayNumberInput) {
    this.dataSource10 = new MatTableDataSource(this.classData10.filter(x => x.dayNumber == dayNumberInput));  
    return this.dataSource10;
  }

  cncClasses(dayNumberInput) {
    this.dataSource11 = new MatTableDataSource(this.classData11.filter(x => x.dayNumber == dayNumberInput));  
    return this.dataSource11;
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





}