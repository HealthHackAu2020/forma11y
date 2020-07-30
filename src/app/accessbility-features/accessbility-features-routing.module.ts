import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessbilityFeaturesPage } from './accessbility-features.page';

const routes: Routes = [
  {
    path: '',
    component: AccessbilityFeaturesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessbilityFeaturesPageRoutingModule {}
