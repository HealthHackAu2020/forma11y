import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { ValidationErrorComponent } from './validation-error/validation-error.component';
import { CommonModule } from '@angular/common';
@NgModule({
      declarations: [ValidationErrorComponent],
      exports: [ ValidationErrorComponent],
      imports: [IonicModule, CommonModule]
  })
  export class ComponentsModule {}
