import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisProductosPage } from './mis-productos.page';

describe('MisProductosPage', () => {
  let component: MisProductosPage;
  let fixture: ComponentFixture<MisProductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisProductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
