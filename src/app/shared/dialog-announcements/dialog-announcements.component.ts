import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ScheduleMapService } from 'src/app/data-services/schedule-map.service';

@Component({
  selector: 'app-dialog-announcements',
  templateUrl: './dialog-announcements.component.html',
  styleUrls: ['./dialog-announcements.component.scss']
})
export class DialogAnnouncementsComponent implements OnInit {

  constructor(
    public _announcements: ScheduleMapService,
  ) { }

  ngOnInit(): void {
    this.announcementSubscription()
  }

  adData;

  announcementSubscription(){
    // this._announcements.announcements().subscribe(data => { 
    //   this.adData = data.map(element => element.payload.doc.data());
    // });
  }

}
