import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClinicPage } from './clinic.page';

describe('ClinicPage', () => {
  let component: ClinicPage;
  let fixture: ComponentFixture<ClinicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClinicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
