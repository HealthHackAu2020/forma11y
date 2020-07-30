import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccessbilityFeaturesPage } from './accessbility-features.page';

describe('AccessbilityFeaturesPage', () => {
  let component: AccessbilityFeaturesPage;
  let fixture: ComponentFixture<AccessbilityFeaturesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessbilityFeaturesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccessbilityFeaturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
