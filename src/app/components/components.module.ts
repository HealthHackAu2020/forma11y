import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { ValidationErrorComponent } from './validation-error/validation-error.component';
import { CommonModule } from '@angular/common';
import { AccessibilityButtonComponent } from './accessibility-button/accessibility-button.component';
import { HiddenSubmitButtonComponent } from './hidden-submit-button/hidden-submit-button.component';
@NgModule({
      declarations: [ValidationErrorComponent, AccessibilityButtonComponent, HiddenSubmitButtonComponent],
      exports: [ ValidationErrorComponent, AccessibilityButtonComponent, HiddenSubmitButtonComponent],
      imports: [IonicModule, CommonModule]
  })
  export class ComponentsModule {}
