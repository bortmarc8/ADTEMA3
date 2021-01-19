import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";
import { ListadoProductos } from '../services/listado.service';
import { Iproductos, IproductoTecnologia, IproductoInmobiliaria, IproductoMotor } from '../interfaces';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-likes',
  templateUrl: './likes.page.html',
  styleUrls: ['./likes.page.scss'],
})

export class LikesPage implements OnInit {
  username : string;
  productos : (Iproductos | IproductoTecnologia | IproductoInmobiliaria | IproductoMotor)[] = [];
  likedProductos : (Iproductos | IproductoTecnologia | IproductoInmobiliaria | IproductoMotor)[] = [];
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
        if (child.val().categoria == 'Tecnología' && child.val().propietario === this.username) {
          this.productos.push(
            {
              "propietario" : child.val().propietario,
              "id" : child.key,
              "nombre" : child.val().nombre,
              "descripcion" : child.val().descripcion,
              "categoria" : child.val().categoria,
              "precio" : child.val().precio,
              "estado" : child.val().estado,
              "like" : child.val().like
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
              "anyo" : child.val().anyo.substring(0,4),
              "like" : child.val().like
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
              "localidad" : child.val().localidad,
              "like" : child.val().like
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
              "precio" : child.val().precio,
              "like" : child.val().like
            }
          );
        }
      });
    });

    console.log("Se ejecuta");
    this.loadObjects();
  }

  async loadObjects () {
    this.productos.forEach(element => {
      console.log(element);
      console.log("Se ejecuta2");
     if (typeof element.like != undefined) {
      element.like.forEach(element2 => {
        if (element2 == this.username) {
          this.likedProductos.push(element);
         }
        });
      }
    });
  }
}
