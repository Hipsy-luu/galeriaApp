import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoryTransPage } from './history-trans.page';

describe('HistoryTransPage', () => {
  let component: HistoryTransPage;
  let fixture: ComponentFixture<HistoryTransPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryTransPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryTransPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
