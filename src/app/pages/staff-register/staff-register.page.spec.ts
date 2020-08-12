import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StaffRegisterPage } from './staff-register.page';

describe('StaffRegisterPage', () => {
  let component: StaffRegisterPage;
  let fixture: ComponentFixture<StaffRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StaffRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
