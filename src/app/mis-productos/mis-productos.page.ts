import { Component, OnInit } from '@angular/core';
import { Iproductos, IproductoTecnologia, IproductoInmobiliaria, IproductoMotor } from '../interfaces';
import { ListadoProductos } from '../services/listado.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.page.html',
  styleUrls: ['./mis-productos.page.scss'],
})
export class MisProductosPage implements OnInit {
  username : string;
  productos : (Iproductos | IproductoTecnologia | IproductoInmobiliaria | IproductoMotor)[] = [];
  catHogar : boolean = true;
  catMotor : boolean = true;
  catTecno : boolean = true;
  catInmo : boolean = true;

  constructor(private _activatedRoute : ActivatedRoute, private _productList : ListadoProductos) { }

  ngOnInit() {
    this.username = this._activatedRoute.snapshot.paramMap.get('username');

    const ref = this._productList.getProductos();
    ref.on("value", snapshot => {
      this.productos = [];
      snapshot.forEach(child => {
        console.log("He encontrado " + child.key + " " + child.val().categoria);
        if (child.val().categoria == 'Tecnología' && child.val().propietario === this.username) {
          this.productos.push(
            {
              "propietario" : child.val().propietario,
              "id" : child.key,
              "nombre" : child.val().nombre,
              "descripcion" : child.val().descripcion,
              "categoria" : child.val().categoria,
              "precio" : child.val().precio,
              "estado" : child.val().estado
            }
          )
        } else if (child.val().categoria == 'Motor' && child.val().propietario === this.username){
          this.productos.push(
            {
              "propietario" : child.val().propietario,
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
        } else if (child.val().categoria == 'Inmobiliaria' && child.val().propietario === this.username){
          this.productos.push(
            {
              "propietario" : child.val().propietario,
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
        }else if (child.val().propietario === this.username){
          this.productos.push(
            {
              "propietario" : child.val().propietario,
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
