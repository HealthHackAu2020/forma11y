import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPageRoutingModule } from './form-routing.module';

import { FormPage } from './form.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [FormPage]
})
export class FormPageModule {}
