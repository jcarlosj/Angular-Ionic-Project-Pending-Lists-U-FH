import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendingAddPage } from './pending-add.page';

describe('PendingAddPage', () => {
  let component: PendingAddPage;
  let fixture: ComponentFixture<PendingAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendingAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
