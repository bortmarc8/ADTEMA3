import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubirProductoPage } from './subir-producto.page';

describe('SubirProductoPage', () => {
  let component: SubirProductoPage;
  let fixture: ComponentFixture<SubirProductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirProductoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubirProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
