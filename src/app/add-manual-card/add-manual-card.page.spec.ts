import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddManualCardPage } from './add-manual-card.page';

describe('AddManualCardPage', () => {
  let component: AddManualCardPage;
  let fixture: ComponentFixture<AddManualCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddManualCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddManualCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
