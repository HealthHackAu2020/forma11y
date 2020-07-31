import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { ValidationErrorComponent } from './validation-error/validation-error.component';
import { CommonModule } from '@angular/common';
import { AccessibilityButtonComponent } from './accessibility-button/accessibility-button.component';
@NgModule({
      declarations: [ValidationErrorComponent, AccessibilityButtonComponent],
      exports: [ ValidationErrorComponent, AccessibilityButtonComponent],
      imports: [IonicModule, CommonModule]
  })
  export class ComponentsModule {}
