import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ValidationService } from '../validation.service';
import { PopoverController } from '@ionic/angular';
import { AccessibilityFeaturesComponent } from '../components/accessibility-features/accessibility-features.component';
import { DarkModeService } from '../dark-mode.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  title: string = 'Form Elements';
  dummyForm: FormGroup;
  isDarkMode: boolean;
  constructor(public formBuilder: FormBuilder, private popoverController: PopoverController, private darkModeService: DarkModeService) {
    this.dummyForm = this.formBuilder.group({
      input1: ['', ValidationService.isRequired],
      input2: ['', ValidationService.isRequired],
      email: ['', [ValidationService.isRequired, ValidationService.isEmailValid]],
    });
  }

  ngOnInit() {
    this.isDarkMode = this.darkModeService.get()
  }

  async showA11yFeatures(event: any) {
    const popover = await this.popoverController.create({
      component: AccessibilityFeaturesComponent,
      event
    })
    return await popover.present();  
  }


}
