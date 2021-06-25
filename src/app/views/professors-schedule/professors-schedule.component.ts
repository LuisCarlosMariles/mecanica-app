import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professors-schedule',
  templateUrl: './professors-schedule.component.html',
  styleUrls: ['./professors-schedule.component.scss']
})
export class ProfessorsScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.floor);
  }

  public floor: string ;

  public isChecked;

  display(){
    // if(this.floor){}
    console.log(this.floor);
  }
}
