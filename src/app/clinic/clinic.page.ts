import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FontSizeService } from '../font-size.service';
import { DarkModeService } from '../dark-mode.service';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.page.html',
  styleUrls: ['./clinic.page.scss'],
})
export class ClinicPage implements OnInit {
  title: string = 'Clinic';
  isDarkMode: boolean;
  fontSize: number;
  
  constructor(private darkModeService: DarkModeService, private fontSizeService: FontSizeService, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.getDefaults();
  }

  ngAfterViewChecked() {
    this.getDefaults();
  }

  getDefaults() {
    this.isDarkMode = this.darkModeService.get();
    this.fontSize = this.fontSizeService.get();
    this.changeDetectorRef.detectChanges(); // https://stackoverflow.com/questions/34364880/expression-has-changed-after-it-was-checked
  }

}
