import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessbilityFeaturesPageRoutingModule } from './accessbility-features-routing.module';

import { AccessbilityFeaturesPage } from './accessbility-features.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccessbilityFeaturesPageRoutingModule
  ],
  declarations: [AccessbilityFeaturesPage]
})
export class AccessbilityFeaturesPageModule {}
