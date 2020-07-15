import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OptionLimitComponent } from './option-limit.component';

describe('OptionLimitComponent', () => {
  let component: OptionLimitComponent;
  let fixture: ComponentFixture<OptionLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionLimitComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OptionLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
