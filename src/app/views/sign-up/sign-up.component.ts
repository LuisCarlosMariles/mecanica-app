import { Component, OnInit } from '@angular/core';
import { AbstractControl, EmailValidator, NgForm, Validators, FormBuilder, FormGroup, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { IdentificationTemplate, MAJOR_ARRAY } from '../../models/identification';

import { ValidationStyles } from '../../models/validationStyles';
import { AuthService } from '../../data-services/auth.service';
import { RegistrationService } from '../../data-services/registration.service'
import { Router } from '@angular/router';
import { MainNavComponent } from '../../main-nav/main-nav.component'
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { TermsComponent } from 'src/app/shared/terms/terms.component';

@Component({

  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{

  validationStyles: ValidationStyles;
  majorList: Object = MAJOR_ARRAY;
  emails = [];
  hide = true;
  // termsDialog: DialogComponent;

///
  // showUsers(){
  //   let ALL_REGISTERED_EMAILS = this.emails;
  //   let results = ALL_REGISTERED_EMAILS.filter(x => x.email === 'lwfquasdsais');

  //   if(ALL_REGISTERED_EMAILS.filter(x => x.email === 'lwfquasdsais').length != 0){
  //     this.emailExists = true;
  //   }
  //   console.log(this.emailExists, results.length);
  // }

  constructor(
    private fb: FormBuilder,
    private authentication: AuthService,
    private route: Router,
    private mainNav: MainNavComponent,
    public registerDatabase: RegistrationService,
    public dialog: MatDialog,
    // public term: TermsComponent,
  ) {
    // this.termsDialog = new TermsComponent();
    this.validationStyles = new ValidationStyles;
  }
  ngOnInit(): void {
    this.registerDatabase.getUser().subscribe( data => { // function that loads all emails into a variable to later compare it
      this.emails = data.map((e: any) => {
        return {
          email: e.payload.doc.data().email,
        }
        })
  
      });
  }

  openTermsDialogBox(){
    this.dialog.open(TermsComponent)
  }

  signUpForm = this.fb.group({ // declaration and buildinf of the form
    firstName: ['', [Validators.required, Validators.pattern('^[a-z A-Z \u00c0-\u00FF]*$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[a-z A-Z \u00c0-\u00FF]*$')]],
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@uabc.edu.mx$')]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    passwordRepeated: ['', [Validators.required, Validators.minLength(8)]],
    major: [''],
    terms: [false, Validators.required]
  });

  dataInput() {// fills data object with input data
    const data: IdentificationTemplate = {
      firstName: this.signUpForm.get('firstName').value,
      lastName: this.signUpForm.get('lastName').value,
      email: this.signUpForm.get('email').value,
      password: this.signUpForm.get('password').value,
      passwordRepeated: this.signUpForm.get('passwordRepeated').value,
      major: this.signUpForm.get('major').value,
      terms: this.signUpForm.get('terms').value
    };
    return data;
  }



  get emailInput(): AbstractControl { // AbstractControl that is used for styinf in validationStyles component
    return (this.signUpForm.get('email'));
  }

  get lastNameInput(): AbstractControl {
    return (this.signUpForm.get('lastName'));
  }


  get firstNameInput(): AbstractControl {
    return (this.signUpForm.get('firstName'));
  }

  get passwordInput(): AbstractControl {
    return (this.signUpForm.get('password'));
  }

  get passwordRepeatedInput(): AbstractControl {
    return (this.signUpForm.get('passwordRepeated'));
  }


  public isFormValid: boolean = true;
  public emailExists: boolean = false;
  public isA: boolean = false;
  onSubmit() {
    const data = this.dataInput();
    const ALL_REGISTERED_EMAILS = this.emails;

    if (!this.validationStyles.samePassword(this.passwordInput, this.passwordRepeatedInput)) { // comparison of passwords
      this.isFormValid = false;
      alert('Not valid!');
      return;
    }

    if (this.passwordInput.value.length<8 && this.passwordRepeatedInput.value.length<8 ) { // checks is passwords lengths are less than 8 characters
      this.isFormValid = false;
      alert('Not valid! es peque;a');
      return;
    }


    if (!this.signUpForm.valid) { // checks if the formattiong of the form is valid
      this.isFormValid = false;
      return;
    }

    else if(ALL_REGISTERED_EMAILS.filter(x => x.email == data.email).length != 0){ //IMPORTANT.- looks for email input in local variable illed with all emails from users collection from firestore
      this.emailExists = true;
      return;
    }

    else { // this happens if everything is OKAY with the form
      this.isFormValid = true;
      this.emailExists = false;

      // this.registerDatabase.registerUser(data.firstName, data.lastName, data.email, data.major); THIS FUNCTION WAS THE PREVIOUS VERSION OF THE ONE BELOW
      this.registerDatabase.registerUserWithCUstomId(data.firstName, data.lastName, data.email, data.major);// registers data in firestore user collection
      const user = this.authentication.signUp(data.email, data.password); // uses firebase auth to register

      if (user) {
        this.route.navigate(['/sendVerificationEmail']); // after registration, it navigates to sendVerification page
      }
    }
  }

}
