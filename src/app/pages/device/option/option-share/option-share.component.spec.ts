import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OptionShareComponent } from './option-share.component';

describe('OptionShareComponent', () => {
  let component: OptionShareComponent;
  let fixture: ComponentFixture<OptionShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionShareComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OptionShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
