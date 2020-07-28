import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPatientRegistrationPageRoutingModule } from './new-patient-registration-routing.module';

import { NewPatientRegistrationPage } from './new-patient-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPatientRegistrationPageRoutingModule
  ],
  declarations: [NewPatientRegistrationPage]
})
export class NewPatientRegistrationPageModule {}
