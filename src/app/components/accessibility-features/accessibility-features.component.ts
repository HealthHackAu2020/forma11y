import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/dark-mode.service';
import { FontSizeService } from 'src/app/font-size.service';

@Component({
  selector: 'app-accessibility-features',
  templateUrl: './accessibility-features.component.html',
  styleUrls: ['./accessibility-features.component.scss'],
})
export class AccessibilityFeaturesComponent implements OnInit {
  isDarkMode: boolean;
  fontSize: number;
  constructor(private darkModeService: DarkModeService, private fontSizeService: FontSizeService) {}

  ngOnInit() {
    this.isDarkMode = this.darkModeService.get();
    this.fontSize = this.fontSizeService.get();
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

}
