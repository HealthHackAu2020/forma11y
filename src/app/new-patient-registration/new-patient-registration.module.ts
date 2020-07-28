import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPatientRegistrationPageRoutingModule } from './new-patient-registration-routing.module';

import { NewPatientRegistrationPage } from './new-patient-registration.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPatientRegistrationPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [NewPatientRegistrationPage]
})
export class NewPatientRegistrationPageModule {}
