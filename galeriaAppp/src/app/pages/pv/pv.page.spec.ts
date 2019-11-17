import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PvPage } from './pv.page';

describe('PvPage', () => {
  let component: PvPage;
  let fixture: ComponentFixture<PvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
