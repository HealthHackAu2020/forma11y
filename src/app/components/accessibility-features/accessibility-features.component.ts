import { Component, OnInit } from '@angular/core';
import { AccessibilityFeaturesService } from 'src/app/accessibility-features.service';
import { DarkModeService } from 'src/app/dark-mode.service';

@Component({
  selector: 'app-accessibility-features',
  templateUrl: './accessibility-features.component.html',
  styleUrls: ['./accessibility-features.component.scss'],
})
export class AccessibilityFeaturesComponent implements OnInit {

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {}

  async onToggleDarkMode(event: CustomEvent): Promise<void> {
    const isChecked: boolean = await event.detail.checked;
    if (isChecked) {
      this.darkModeService.set(true);
      document.body.setAttribute('color-theme', 'dark');
    } else {
      this.darkModeService.set(false);
      document.body.setAttribute('color-theme', 'light');
    }
    console.info(this.darkModeService.get());
  }

}
