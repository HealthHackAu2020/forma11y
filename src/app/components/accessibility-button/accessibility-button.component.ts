import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import { DarkModeService } from 'src/app/dark-mode.service';
import { AccessbilityFeaturesPage } from 'src/app/accessbility-features/accessbility-features.page';
@Component({
  selector: 'accessibility-button',
  template: `
  <div class="a11y-button">
  <button class="a11y-button"
  (click)="showA11yFeatures($event)" aria-label="Tap to use Accessibility Features"
  >  
  <svg
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="30px"
    height="30px"
  >
  <path
    d="M 25 2 C 12.316406 2 2 12.316406 2 25 C 2 37.683594 12.316406 48 25 48 C 37.683594 48 48 37.683594 48 25 C 48 12.316406 37.683594 2 25 2 Z M 25 8 C 26.65625 8 28 9.34375 28 11 C 28 12.65625 26.65625 14 25 14 C 23.34375 14 22 12.65625 22 11 C 22 9.34375 23.34375 8 25 8 Z M 37.523438 18.523438 L 29 21.558594 L 29 29 L 31.535156 39.136719 C 31.769531 40.085938 31.054688 41 30.078125 41 C 29.433594 41 28.863281 40.585938 28.660156 39.976563 L 24.996094 29 L 21.339844 39.976563 C 21.136719 40.585938 20.566406 41 19.921875 41 C 18.945313 41 18.230469 40.085938 18.464844 39.136719 L 21 29 L 21 21.558594 L 12.476563 18.523438 C 11.65625 18.234375 11.21875 17.339844 11.496094 16.515625 C 11.773438 15.679688 12.679688 15.226563 13.515625 15.503906 L 21 18 L 29 18 L 36.484375 15.503906 C 37.320313 15.226563 38.226563 15.679688 38.503906 16.515625 C 38.78125 17.339844 38.34375 18.234375 37.523438 18.523438 Z"
  />
</svg></button>
  </div>
  `,
  styleUrls: ['./accessibility-button.component.scss'],
})
export class AccessibilityButtonComponent implements OnInit {
  isDarkMode: boolean;
  constructor(private darkModeService: DarkModeService, private changeDetectorRef: ChangeDetectorRef, private modalController: ModalController) { }

  async showA11yFeatures(event: any) {
    const modal = await this.modalController.create({
      component: AccessbilityFeaturesPage,
      swipeToClose: true
    })
    return await modal.present();  
  }

  ngOnInit() {
    this.getDefaults();
  }

  ngAfterViewChecked() {
    this.getDefaults();
  }

  getDefaults() {
    this.isDarkMode = this.darkModeService.get();
    this.changeDetectorRef.detectChanges(); // https://stackoverflow.com/questions/34364880/expression-has-changed-after-it-was-checked
  }

}
