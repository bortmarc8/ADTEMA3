import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificarProductosPage } from './modificar-productos.page';

describe('ModificarProductosPage', () => {
  let component: ModificarProductosPage;
  let fixture: ComponentFixture<ModificarProductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarProductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
