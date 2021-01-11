import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";
import { ListadoProductos } from '../services/listado.service';
import { Iproductos, IproductoTecnologia, IproductoInmobiliaria, IproductoMotor } from '../interfaces';

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.page.html',
  styleUrls: ['./ver-productos.page.scss'],
})
export class VerProductosPage implements OnInit {
  productos : (Iproductos | IproductoTecnologia | IproductoInmobiliaria | IproductoMotor)[] = [];

  constructor(private _activatedRoute : ActivatedRoute, private _productList : ListadoProductos, private _toastCtrl : ToastController) { }

  ngOnInit() {
    this.productos = this._productList.getProductos();
  }

}
