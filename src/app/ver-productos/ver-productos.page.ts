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
    const ref = this._productList.getProductos();
    ref.on("value", snapshot => {
      this.productos = [];
      snapshot.forEach(child => {
        console.log("He encontrado " + child.key + " " + child.val().categoria);
        if (child.val().categoria == 'Tecnología') {
          this.productos.push(
            {
              "propietario" : "maboto01",
              "id" : child.key,
              "nombre" : child.val().nombre,
              "descripcion" : child.val().descripcion,
              "categoria" : child.val().categoria,
              "precio" : child.val().precio,
              "estado" : child.val().estado
            }
          )
        } else if (child.val().categoria == 'Motor'){
          this.productos.push(
            {
              "propietario" : "maboto01",
              "id" : child.key,
              "nombre" : child.val().nombre,
              "descripcion" : child.val().descripcion,
              "categoria" : child.val().categoria,
              "precio" : child.val().precio,
              "tipo" : child.val().tipoVehiculo,
              "kilometros" : child.val().kilometros,
              "anyo" : child.val().anyo.substring(0,4)
            }
          );
        } else if (child.val().categoria == 'Inmobiliaria'){
          this.productos.push(
            {
              "propietario" : "maboto01",
              "id" : child.key,
              "nombre" : child.val().nombre,
              "descripcion" : child.val().descripcion,
              "categoria" : child.val().categoria,
              "precio" : child.val().precio,
              "metrosCuadrados" : child.val().mCuadrados,
              "banyos" : child.val().banyos,
              "habitaciones" : child.val().habitaciones,
              "localidad" : child.val().localidad
            }
          );
        }else{
          this.productos.push(
            {
              "propietario" : "maboto01",
              "id" : child.key,
              "nombre" : child.val().nombre,
              "descripcion" : child.val().descripcion,
              "categoria" : child.val().categoria,
              "precio" : child.val().precio
            }
          );
        }
      });
    })
  }

}
