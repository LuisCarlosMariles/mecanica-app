import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/data-services/auth.service';
import { RegistrationService } from 'src/app/data-services/registration.service';


@Component({
  selector: 'app-dialog-other-major',
  templateUrl: './dialog-other-major.component.html',
  styleUrls: ['./dialog-other-major.component.scss']
})
export class DialogOtherMajorComponent implements OnInit {

  constructor(
    public _authService: AuthService,
    private _registrationService: RegistrationService,
  ) { }

  ngOnInit(): void {
    this.openOtherMajorCard()
  }

  public major: string;
  public firstName: string;

  openOtherMajorCard(){
    this._authService.getCurrentUser().subscribe(user => {
      let email = user?.email;
      this._registrationService.getUser().subscribe(data => {
        let name = data.map(element => element.payload.doc.data()).find(x => x.email == email);
        this.firstName = name?.firstName;
        this.major = name?.major.major.charAt(0).toLowerCase() + name?.major.major.slice(1);
      });
      
    });

    
    // this._registrationService.getUser().subscribe(data => {
    //   let name = data.map(element => element.payload.doc.data());

    //   // this.major = name?.major
    //   console.log(name);
   
    // })
  }

}
