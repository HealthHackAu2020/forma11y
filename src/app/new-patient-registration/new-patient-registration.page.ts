import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FontSizeService } from '../font-size.service';
import { ValidationService } from '../validation.service';
import uuid from "uuid/v4";

@Component({
  selector: 'app-new-patient-registration',
  templateUrl: './new-patient-registration.page.html',
  styleUrls: ['./new-patient-registration.page.scss'],
})
export class NewPatientRegistrationPage implements OnInit {
  title: string = 'New Patient Registration';
  isDarkMode: boolean;
  fontSize: number;
  profileForm: FormGroup;
  contactDetailsForm: FormGroup;
  medicareCardForm: FormGroup;
  healthcareCardForm: FormGroup;
  nextOfKinForm: FormGroup;
  emergencyContactForm: FormGroup;
  advancedHealthCareDirectiveForm: FormGroup;
  constructor(private darkModeService: DarkModeService, private fontSizeService: FontSizeService, private changeDetectorRef: ChangeDetectorRef, private formBuilder: FormBuilder) {

    this.profileForm = this.formBuilder.group({
      title: new FormControl(''),
      surname: new FormControl(''),
      givenNames: new FormControl(''),
      dob: new FormControl(''),
      gender: new FormControl(''),
      maritalStatus: new FormControl(''),
      occupation: new FormControl(''),
    });

    this.medicareCardForm = this.formBuilder.group({
      cardNumber: new FormControl('', [ValidationService.isRequired, ValidationService.isValidMedicareCardNumber]),
      cardRef: new FormControl('', [ValidationService.isRequired, ValidationService.isWholeNumber,ValidationService.isGreaterThan(0)]),
      expiryDate: new FormControl('', [ValidationService.isRequired]),
    });
    
    this.healthcareCardForm = this.formBuilder.group({
      cardNumber: new FormControl(''),
      type: new FormControl(''),
      expiryDate: new FormControl(''),
    });
    
    this.contactDetailsForm = this.formBuilder.group({
      residentialAddress: new FormControl(''),
      residentialPostcode: new FormControl(''),
      postalAddress: new FormControl(''),
      postalPostcode: new FormControl(''),
      mobile: new FormControl(''),
      phone: new FormControl(''),
      work: new FormControl(''),
      email: new FormControl(''),
    });
    
    this.nextOfKinForm = this.formBuilder.group({
      name: new FormControl(''),
      relationship: new FormControl(''),
      mobile: new FormControl(''),
      phone: new FormControl(''),
      work: new FormControl(''),
    });

    this.emergencyContactForm = this.formBuilder.group({
      name: new FormControl(''),
      relationship: new FormControl(''),
      mobile: new FormControl(''),
      phone: new FormControl(''),
      work: new FormControl(''),
    });

    this.advancedHealthCareDirectiveForm = this.formBuilder.group({
      hasAdvancedHealthCareDirective: new FormControl(''),
    });
    
  }

  ngOnInit() {
    this.getDefaults();
  }

  ngAfterViewChecked() {
    this.getDefaults();
  }

  getDefaults() {
    this.isDarkMode = this.darkModeService.get();
    this.fontSize = this.fontSizeService.get();
    this.changeDetectorRef.detectChanges(); // https://stackoverflow.com/questions/34364880/expression-has-changed-after-it-was-checked
  }

  onNext() {
    this.buildForm();
  }

  async buildForm() {
    let formData = {
      id: uuid(),
      formType: "new-patient",
      patient: await this.profileForm.value,
      medicare: await this.medicareCardForm.value,
      healthcareCard: await this.healthcareCardForm.value,
      contact: await this.contactDetailsForm.value,
      nextOfKin: await this.nextOfKinForm.value,
      emergencyContact: await this.emergencyContactForm.value,
      hasAdvancedHhealthDirective: await this.advancedHealthCareDirectiveForm.value,
    }
    console.dir(formData);
    console.log(JSON.stringify(formData));
  }

  clearForms() {
    this.profileForm.reset(),
    this.medicareCardForm.reset(),
    this.healthcareCardForm.reset(),
    this.contactDetailsForm.reset(),
    this.nextOfKinForm.reset(),
    this.emergencyContactForm.reset(),
    this.advancedHealthCareDirectiveForm.reset()
  }

}
