import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicPage } from './clinic.page';

const routes: Routes = [
  {
    path: '',
    component: ClinicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicPageRoutingModule {}
