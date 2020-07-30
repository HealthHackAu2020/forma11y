import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClinicPageRoutingModule } from './clinic-routing.module';

import { ClinicPage } from './clinic.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClinicPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [ClinicPage]
})
export class ClinicPageModule {}
