import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';
import { FontSizeService } from '../font-size.service';
import { ReaderModeService } from '../reader-mode.service';
import { FontFamilyService } from '../font-family.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-accessbility-features',
  templateUrl: './accessbility-features.page.html',
  styleUrls: ['./accessbility-features.page.scss'],
})
export class AccessbilityFeaturesPage implements OnInit {
  title: string = "Universal Access";
  isDarkMode: boolean;
  fontSize: number;
  isReaderMode: boolean;
  fontFamily: string | null;
  constructor(private darkModeService: DarkModeService, private fontSizeService: FontSizeService, private readerModeService: ReaderModeService, private fontFamilyService: FontFamilyService, private modalController: ModalController, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.isDarkMode = this.darkModeService.get();
    this.fontSize = this.fontSizeService.get();
    this.isReaderMode = this.readerModeService.get();
    this.fontFamily = this.fontFamilyService.get();
  }

  async onToggleDarkMode(event: CustomEvent): Promise<void> {
    const isChecked: boolean = await event.detail.checked;
    if (isChecked) {
      this.darkModeService.set(true);
      document.body.setAttribute('color-theme', 'dark');
    } else {
      this.darkModeService.set(false);
      document.body.setAttribute('color-theme', 'light');
    }
    console.info(this.isDarkMode);
  }
  
  async onChangeFontSize(event: any) {
    const size = await event.detail.value;
    this.fontSizeService.set(size);
  }

  async onToggleReaderMode(event: CustomEvent): Promise<void> {
    const isChecked: boolean = await event.detail.checked;
    if (isChecked) {
      this.readerModeService.set(true);
      document.body.setAttribute('font-readable', 'true');
    } else {
      this.readerModeService.set(false);
      document.body.setAttribute('font-readable', 'false');
    }
    console.info(this.isReaderMode);
  }

  async onFontFamilyChange(event: CustomEvent) {
    const fontFamily = await event.detail.value;
    this.fontFamilyService.set(fontFamily);
    document.body.setAttribute('font-family', fontFamily);
    console.info(fontFamily);
  }

  closeModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  ngAfterViewChecked() {
    this.getDefaults();
  }

  getDefaults() {
    this.isDarkMode = this.darkModeService.get();
    this.fontSize = this.fontSizeService.get();
    this.isReaderMode = this.readerModeService.get();
    this.fontFamily = this.fontFamilyService.get();
    this.changeDetectorRef.detectChanges(); // https://stackoverflow.com/questions/34364880/expression-has-changed-after-it-was-checked
  }



}
