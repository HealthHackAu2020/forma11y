import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessibility-features',
  templateUrl: './accessibility-features.component.html',
  styleUrls: ['./accessibility-features.component.scss'],
})
export class AccessibilityFeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  onToggleDarkMode(event: CustomEvent): void {
    const isChecked: boolean = event.detail.checked;
    return isChecked
      ? document.body.setAttribute('color-theme', 'dark')
      : document.body.setAttribute('color-theme', 'light');
  }

}
