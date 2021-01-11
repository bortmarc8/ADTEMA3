import { Component } from '@angular/core';
import { PickerController, ToastController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { Iproductos, IproductoTecnologia, IproductoInmobiliaria, IproductoMotor } from '../interfaces';
import { ListadoProductos } from '../services/listado.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username : string;

  constructor(private _activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.username = this._activatedRoute.snapshot.paramMap.get('username');
  }

}
