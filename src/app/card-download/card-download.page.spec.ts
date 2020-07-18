import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardDownloadPage } from './card-download.page';

describe('CardDownloadPage', () => {
  let component: CardDownloadPage;
  let fixture: ComponentFixture<CardDownloadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDownloadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardDownloadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
