import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { first } from 'rxjs/operators';
import { ProfessorsScheduleService } from 'src/app/data-services/professors-schedule.service';

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
    public _professorsSchedule: ProfessorsScheduleService,
  ) { }

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
      case 'cubicle9':
        this.dialog.open(DialogContentCubicle9);
        break;
      case 'cubicle9':
        this.dialog.open(DialogContentCubicle9);
        break;
      case 'cubicle10':
        this.dialog.open(DialogContentCubicle10);
        break;
      case 'cubicle11':
        this.dialog.open(DialogContentCubicle11);
        break;
      default:
        break;
    }
  }
}


//-------------------------------------------------------------------------------------------------------------------------------------------------------
@Component({
  templateUrl: './dialog-cubicle-content/cubicle1.html',
  styleUrls: ['./dialog-cubicle.component.scss']
})
export class DialogContentCubicle1 implements OnInit {
  constructor(
    public _professorsSchedule: ProfessorsScheduleService,
    public firebaseStorage: AngularFireStorage,
  ) { }

  public isWeekend: boolean = false;
  public displayedColumns: string[] = ['day', 'startHour1', 'endHour1', 'startHour2', 'endHour2'];
  public day: Number;
  public cbcData1 = [];
  public dataSourceCubicle1;
  public loaded = false;
  public cubicle1Photo: string;


  classesArray1 = [];
  description1: string;

  ngOnInit() {
    this._professorsSchedule.cubicle1().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData1.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });
      this.dataSourceCubicle1 = new MatTableDataSource(this.cbcData1);
      this.cbcData1.sort((a, b) => a.dayNumber - b.dayNumber);
    });

    this._professorsSchedule.cubicle1Classes().subscribe(data => {
      data.forEach(element => {
        this.classesArray1 = element.payload.doc.get('classesList');
      });
    });

    this._professorsSchedule.cubicle1Description().subscribe(data => {
      data.forEach(element => {
        this.description1 = element.payload.doc.get('professorDescription');
      });
    });

    this.firebaseStorage.storage.ref('professors/photo1.jpg').getDownloadURL()
      .then((url) => { // Function to get image from firebase storage
        this.cubicle1Photo = url;
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


//-------------------------------------------------------------------------------------------------------------------------------------------------------
@Component({
  templateUrl: './dialog-cubicle-content/cubicle2.html',
  styleUrls: ['./dialog-cubicle.component.scss']
})
export class DialogContentCubicle2 implements OnInit {
  constructor(
    public _professorsSchedule: ProfessorsScheduleService,
    public firebaseStorage: AngularFireStorage,) { }

  public isWeekend: boolean = false;
  public displayedColumns: string[] = ['day', 'startHour1', 'endHour1', 'startHour2', 'endHour2'];
  public day: Number;
  public cbcData2 = [];
  public dataSourceCubicle2;
  public loaded = false;
  public cubicle2Photo: string;


  classesArray2 = [];
  description2: string;


  ngOnInit(): void {
    this._professorsSchedule.cubicle2().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData2.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });
      this.dataSourceCubicle2 = new MatTableDataSource(this.cbcData2);
      this.cbcData2.sort((a, b) => a.dayNumber - b.dayNumber);
    });

    this._professorsSchedule.cubicle2Classes().subscribe(data => {
      data.forEach(element => {
        this.classesArray2 = element.payload.doc.get('classesList');
      });
    });

    this._professorsSchedule.cubicle2Description().subscribe(data => {
      data.forEach(element => {
        this.description2 = element.payload.doc.get('professorDescription');
      });
    });

    this.firebaseStorage.storage.ref('professors/photo1.jpg').getDownloadURL()
      .then((url) => { // Function to get image from firebase storage
        this.cubicle2Photo = url;
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



//-------------------------------------------------------------------------------------------------------------------------------------------------------
@Component({
  templateUrl: './dialog-cubicle-content/cubicle3.html',
  styleUrls: ['./dialog-cubicle.component.scss']
})
export class DialogContentCubicle3 implements OnInit {
  constructor(
    public _professorsSchedule: ProfessorsScheduleService,
    public firebaseStorage: AngularFireStorage,) { }

  public isWeekend: boolean = false;
  public displayedColumns: string[] = ['day', 'startHour1', 'endHour1', 'startHour2', 'endHour2'];
  public day: Number;
  public cbcData3 = [];
  public dataSourceCubicle3;
  public loaded = false;
  public cubicle3Photo: string;


  classesArray3 = [];
  description3: string;

  ngOnInit(): void {
    this._professorsSchedule.cubicle3().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData3.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });
      this.dataSourceCubicle3 = new MatTableDataSource(this.cbcData3);
      this.cbcData3.sort((a, b) => a.dayNumber - b.dayNumber);
    });

    this._professorsSchedule.cubicle3Classes().subscribe(data => {
      data.forEach(element => {
        this.classesArray3 = element.payload.doc.get('classesList');
      });
    });

    this._professorsSchedule.cubicle3Description().subscribe(data => {
      data.forEach(element => {
        this.description3 = element.payload.doc.get('professorDescription');
      });
    });

    this.firebaseStorage.storage.ref('professors/photo1.jpg').getDownloadURL()
      .then((url) => { // Function to get image from firebase storage
        this.cubicle3Photo = url;
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


//-------------------------------------------------------------------------------------------------------------------------------------------------------
@Component({
  templateUrl: './dialog-cubicle-content/cubicle4.html',
  styleUrls: ['./dialog-cubicle.component.scss']
})
export class DialogContentCubicle4 implements OnInit {
  constructor(
    public _professorsSchedule: ProfessorsScheduleService,
    public firebaseStorage: AngularFireStorage,) { }

  public isWeekend: boolean = false;
  public displayedColumns: string[] = ['day', 'startHour1', 'endHour1', 'startHour2', 'endHour2'];
  public day: Number;
  public cbcData4 = [];
  public dataSourceCubicle4;
  public loaded = false;
  public cubicle4Photo: string;


  classesArray4 = [];
  description4: string;


  ngOnInit() {
    this._professorsSchedule.cubicle4().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData4.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });
      this.dataSourceCubicle4 = new MatTableDataSource(this.cbcData4);
      this.cbcData4.sort((a, b) => a.dayNumber - b.dayNumber);
    });

    this._professorsSchedule.cubicle4Classes().subscribe(data => {
      data.forEach(element => {
        this.classesArray4 = element.payload.doc.get('classesList');
      });
    });

    this._professorsSchedule.cubicle4Description().subscribe(data => {
      data.forEach(element => {
        this.description4 = element.payload.doc.get('professorDescription');
      });
    });

    this.firebaseStorage.storage.ref('professors/photo1.jpg').getDownloadURL()
      .then((url) => { // Function to get image from firebase storage
        this.cubicle4Photo = url;
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


//-------------------------------------------------------------------------------------------------------------------------------------------------------
@Component({
  templateUrl: './dialog-cubicle-content/cubicle5.html',
  styleUrls: ['./dialog-cubicle.component.scss']
})
export class DialogContentCubicle5 implements OnInit {
  constructor(
    public _professorsSchedule: ProfessorsScheduleService,
    public firebaseStorage: AngularFireStorage,) { }

  public isWeekend: boolean = false;
  public displayedColumns: string[] = ['day', 'startHour1', 'endHour1', 'startHour2', 'endHour2'];
  public day: Number;
  public cbcData5 = [];
  public dataSourceCubicle5;
  public loaded = false;
  public cubicle5Photo: string;


  classesArray5 = [];
  description5: string;

  ngOnInit() {
    this._professorsSchedule.cubicle5().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData5.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });
      this.dataSourceCubicle5 = new MatTableDataSource(this.cbcData5);
      this.cbcData5.sort((a, b) => a.dayNumber - b.dayNumber);
    });

    this._professorsSchedule.cubicle5Classes().subscribe(data => {
      data.forEach(element => {
        this.classesArray5 = element.payload.doc.get('classesList');
      });
    });

    this._professorsSchedule.cubicle5Description().subscribe(data => {
      data.forEach(element => {
        this.description5 = element.payload.doc.get('professorDescription');
      });
    });

    this.firebaseStorage.storage.ref('professors/photo1.jpg').getDownloadURL()
      .then((url) => { // Function to get image from firebase storage
        this.cubicle5Photo = url;
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


//-------------------------------------------------------------------------------------------------------------------------------------------------------
@Component({
  templateUrl: './dialog-cubicle-content/cubicle6.html',
  styleUrls: ['./dialog-cubicle.component.scss']
})
export class DialogContentCubicle6 implements OnInit {
  constructor(
    public _professorsSchedule: ProfessorsScheduleService,
    public firebaseStorage: AngularFireStorage,) { }

  public isWeekend: boolean = false;
  public displayedColumns: string[] = ['day', 'startHour1', 'endHour1', 'startHour2', 'endHour2'];
  public day: Number;
  public cbcData6 = [];
  public dataSourceCubicle6;
  public loaded = false;
  public cubicle6Photo: string;


  classesArray6 = [];
  description6: string;

  ngOnInit() {
    this._professorsSchedule.cubicle6().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData6.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });
      this.dataSourceCubicle6 = new MatTableDataSource(this.cbcData6);
      this.cbcData6.sort((a, b) => a.dayNumber - b.dayNumber);
    });

    this._professorsSchedule.cubicle6Classes().subscribe(data => {
      data.forEach(element => {
        this.classesArray6 = element.payload.doc.get('classesList');
      });
    });

    this._professorsSchedule.cubicle6Description().subscribe(data => {
      data.forEach(element => {
        this.description6 = element.payload.doc.get('professorDescription');
      });
    });

    this.firebaseStorage.storage.ref('professors/photo1.jpg').getDownloadURL()
      .then((url) => { // Function to get image from firebase storage
        this.cubicle6Photo = url;
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


//-------------------------------------------------------------------------------------------------------------------------------------------------------
@Component({
  templateUrl: './dialog-cubicle-content/cubicle7.html',
  styleUrls: ['./dialog-cubicle.component.scss']
})
export class DialogContentCubicle7 implements OnInit {
  constructor(
    public _professorsSchedule: ProfessorsScheduleService,
    public firebaseStorage: AngularFireStorage,) { }

  public isWeekend: boolean = false;
  public displayedColumns: string[] = ['day', 'startHour1', 'endHour1', 'startHour2', 'endHour2'];
  public day: Number;
  public cbcData7 = [];
  public dataSourceCubicle7;
  public loaded = false;
  public cubicle7Photo: string;


  classesArray7 = [];
  description7: string;


  ngOnInit() {
    this._professorsSchedule.cubicle7().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData7.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });
      this.dataSourceCubicle7 = new MatTableDataSource(this.cbcData7);
      this.cbcData7.sort((a, b) => a.dayNumber - b.dayNumber);
    });
    this._professorsSchedule.cubicle7Classes().subscribe(data => {
      data.forEach(element => {
        this.classesArray7 = element.payload.doc.get('classesList');
      });
    });

    this._professorsSchedule.cubicle7Description().subscribe(data => {
      data.forEach(element => {
        this.description7 = element.payload.doc.get('professorDescription');
      });
    });

    this.firebaseStorage.storage.ref('professors/photo1.jpg').getDownloadURL()
      .then((url) => { // Function to get image from firebase storage
        this.cubicle7Photo = url;
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



//-------------------------------------------------------------------------------------------------------------------------------------------------------
@Component({
  templateUrl: './dialog-cubicle-content/cubicle8.html',
  styleUrls: ['./dialog-cubicle.component.scss']
})
export class DialogContentCubicle8 implements OnInit {
  constructor(
    public _professorsSchedule: ProfessorsScheduleService,
    public firebaseStorage: AngularFireStorage,) { }

  public isWeekend: boolean = false;
  public displayedColumns: string[] = ['day', 'startHour1', 'endHour1', 'startHour2', 'endHour2'];
  public day: Number;
  public cbcData8 = [];
  public dataSourceCubicle8;
  public loaded = false;
  public cubicle8Photo: string;


  classesArray8 = [];
  description8: string;


  ngOnInit() {
    this._professorsSchedule.cubicle8().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData8.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });
      this.dataSourceCubicle8 = new MatTableDataSource(this.cbcData8);
      this.cbcData8.sort((a, b) => a.dayNumber - b.dayNumber);
    });
    this._professorsSchedule.cubicle8Classes().subscribe(data => {
      data.forEach(element => {
        this.classesArray8 = element.payload.doc.get('classesList');
      });
    });

    this._professorsSchedule.cubicle8Description().subscribe(data => {
      data.forEach(element => {
        this.description8 = element.payload.doc.get('professorDescription');
      });
    });

    this.firebaseStorage.storage.ref('professors/photo1.jpg').getDownloadURL()
      .then((url) => { // Function to get image from firebase storage
        this.cubicle8Photo = url;
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

//-------------------------------------------------------------------------------------------------------------------------------------------------------
@Component({
  templateUrl: './dialog-cubicle-content/cubicle9.html',
  styleUrls: ['./dialog-cubicle.component.scss']
})
export class DialogContentCubicle9 implements OnInit {
  constructor(
    public _professorsSchedule: ProfessorsScheduleService,
    public firebaseStorage: AngularFireStorage,) { }

  public isWeekend: boolean = false;
  public displayedColumns: string[] = ['day', 'startHour1', 'endHour1', 'startHour2', 'endHour2'];
  public day: Number;
  public cbcData9 = [];
  public dataSourceCubicle9;
  public loaded = false;
  public cubicle9Photo: string;


  classesArray9 = [];
  description9: string;


  ngOnInit() {
    this._professorsSchedule.cubicle9().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData9.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });
      this.dataSourceCubicle9 = new MatTableDataSource(this.cbcData9);
      this.cbcData9.sort((a, b) => a.dayNumber - b.dayNumber);
    });
    this._professorsSchedule.cubicle9Classes().subscribe(data => {
      data.forEach(element => {
        this.classesArray9 = element.payload.doc.get('classesList');
      });
    });

    this._professorsSchedule.cubicle9Description().subscribe(data => {
      data.forEach(element => {
        this.description9 = element.payload.doc.get('professorDescription');
      });
    });

    this.firebaseStorage.storage.ref('professors/photo1.jpg').getDownloadURL()
      .then((url) => { // Function to get image from firebase storage
        this.cubicle9Photo = url;
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

//-------------------------------------------------------------------------------------------------------------------------------------------------------
@Component({
  templateUrl: './dialog-cubicle-content/cubicle10.html',
  styleUrls: ['./dialog-cubicle.component.scss']
})
export class DialogContentCubicle10 implements OnInit {
  constructor(
    public _professorsSchedule: ProfessorsScheduleService,
    public firebaseStorage: AngularFireStorage,) { }

  public isWeekend: boolean = false;
  public displayedColumns: string[] = ['day', 'startHour1', 'endHour1', 'startHour2', 'endHour2'];
  public day: Number;
  public cbcData10 = [];
  public dataSourceCubicle10;
  public loaded = false;
  public cubicle10Photo: string;


  classesArray10 = [];
  description10: string;


  ngOnInit() {
    this._professorsSchedule.cubicle10().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData10.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });
      this.dataSourceCubicle10 = new MatTableDataSource(this.cbcData10);
      this.cbcData10.sort((a, b) => a.dayNumber - b.dayNumber);
    });
    this._professorsSchedule.cubicle10Classes().subscribe(data => {
      data.forEach(element => {
        this.classesArray10 = element.payload.doc.get('classesList');
      });
    });

    this._professorsSchedule.cubicle10Description().subscribe(data => {
      data.forEach(element => {
        this.description10 = element.payload.doc.get('professorDescription');
      });
    });

    this.firebaseStorage.storage.ref('professors/photo1.jpg').getDownloadURL()
      .then((url) => { // Function to get image from firebase storage
        this.cubicle10Photo = url;
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

//-------------------------------------------------------------------------------------------------------------------------------------------------------
@Component({
  templateUrl: './dialog-cubicle-content/cubicle11.html',
  styleUrls: ['./dialog-cubicle.component.scss']
})
export class DialogContentCubicle11 implements OnInit {
  constructor(
    public _professorsSchedule: ProfessorsScheduleService,
    public firebaseStorage: AngularFireStorage,) { }

  public isWeekend: boolean = false;
  public displayedColumns: string[] = ['day', 'startHour1', 'endHour1', 'startHour2', 'endHour2'];
  public day: Number;
  public cbcData11 = [];
  public dataSourceCubicle11;
  public loaded = false;
  public cubicle11Photo: string;


  classesArray11 = [];
  description11: string;


  ngOnInit() {
    this._professorsSchedule.cubicle11().pipe(first()).subscribe(data => {
      data.forEach(element => {
        this.cbcData11.push(element.payload.doc.data()); // for each element inside firebase dayData1Data array, it pushes the contnet into cbcData1(local variable)
      });
      this.dataSourceCubicle11 = new MatTableDataSource(this.cbcData11);
      this.cbcData11.sort((a, b) => a.dayNumber - b.dayNumber);
    });
    this._professorsSchedule.cubicle11Classes().subscribe(data => {
      data.forEach(element => {
        this.classesArray11 = element.payload.doc.get('classesList');
      });
    });

    this._professorsSchedule.cubicle11Description().subscribe(data => {
      data.forEach(element => {
        this.description11 = element.payload.doc.get('professorDescription');
      });
    });

    this.firebaseStorage.storage.ref('professors/photo1.jpg').getDownloadURL()
      .then((url) => { // Function to get image from firebase storage
        this.cubicle11Photo = url;
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