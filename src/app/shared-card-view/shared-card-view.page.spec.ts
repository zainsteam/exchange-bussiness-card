import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SharedCardViewPage } from './shared-card-view.page';

describe('SharedCardViewPage', () => {
  let component: SharedCardViewPage;
  let fixture: ComponentFixture<SharedCardViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedCardViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SharedCardViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
