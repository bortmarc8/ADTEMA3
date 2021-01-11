import { Component, OnInit } from '@angular/core';
import { ListadoProductos } from '../services/listado.service';
import { ActivatedRoute } from "@angular/router";
import { Iproductos, IproductoTecnologia, IproductoInmobiliaria, IproductoMotor } from '../interfaces';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  producto : (Iproductos | IproductoTecnologia | IproductoInmobiliaria | IproductoMotor);
  id : string;

  constructor(private _activatedRoute : ActivatedRoute, private _productList : ListadoProductos) { }

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this.producto = this._productList.getProductoDetailed(this.id);
    console.log(this.producto);



  }

}
