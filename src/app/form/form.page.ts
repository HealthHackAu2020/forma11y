import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  title: string = 'Form Elements';
  dummyForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.dummyForm = this.formBuilder.group({
      input1: ['', ValidationService.isRequired],
      input2: ['', ValidationService.isRequired],
    });
  }

  ngOnInit() {
  }


}
