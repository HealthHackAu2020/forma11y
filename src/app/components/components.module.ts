import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { ValidationErrorComponent } from './validation-error/validation-error.component';
import { CommonModule } from '@angular/common';
import { AccessibilityFeaturesComponent } from './accessibility-features/accessibility-features.component';
import { AccessibilityButtonComponent } from './accessibility-button/accessibility-button.component';
@NgModule({
      declarations: [ValidationErrorComponent, AccessibilityFeaturesComponent, AccessibilityButtonComponent],
      exports: [ ValidationErrorComponent, AccessibilityFeaturesComponent, AccessibilityButtonComponent],
      imports: [IonicModule, CommonModule]
  })
  export class ComponentsModule {}
