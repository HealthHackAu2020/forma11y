import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FontSizeService } from '../font-size.service';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-new-patient-registration',
  templateUrl: './new-patient-registration.page.html',
  styleUrls: ['./new-patient-registration.page.scss'],
})
export class NewPatientRegistrationPage implements OnInit {
  title: string = 'New Patient Registration';
  isDarkMode: boolean;
  medicareCardForm: FormGroup;
  fontSize: number;
  constructor(private darkModeService: DarkModeService, private fontSizeService: FontSizeService, private changeDetectorRef: ChangeDetectorRef, private formBuilder: FormBuilder) {
    this.medicareCardForm = this.formBuilder.group({
      cardNumber: new FormControl('', [ValidationService.isRequired, ValidationService.isValidMedicareCardNumber]),
      cardRef: new FormControl('', [ValidationService.isRequired, ValidationService.isWholeNumber,ValidationService.isGreaterThan(0)]),
      expiryDate: new FormControl('', [ValidationService.isRequired]),
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

}
