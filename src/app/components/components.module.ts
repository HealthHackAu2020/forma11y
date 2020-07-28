import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { ValidationErrorComponent } from './validation-error/validation-error.component';
import { CommonModule } from '@angular/common';
import { AccessibilityFeaturesComponent } from './accessibility-features/accessibility-features.component';
@NgModule({
      declarations: [ValidationErrorComponent, AccessibilityFeaturesComponent],
      exports: [ ValidationErrorComponent, AccessibilityFeaturesComponent],
      imports: [IonicModule, CommonModule]
  })
  export class ComponentsModule {}
