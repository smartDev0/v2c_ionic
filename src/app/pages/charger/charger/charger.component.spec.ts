import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChargerComponent } from './charger.component';

describe('ChargerComponent', () => {
  let component: ChargerComponent;
  let fixture: ComponentFixture<ChargerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChargerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
