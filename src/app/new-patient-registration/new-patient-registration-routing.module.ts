import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPatientRegistrationPage } from './new-patient-registration.page';

const routes: Routes = [
  {
    path: '',
    component: NewPatientRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPatientRegistrationPageRoutingModule {}
