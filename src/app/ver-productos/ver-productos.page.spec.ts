import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerProductosPage } from './ver-productos.page';

describe('VerProductosPage', () => {
  let component: VerProductosPage;
  let fixture: ComponentFixture<VerProductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerProductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
