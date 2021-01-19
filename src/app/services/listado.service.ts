import { Injectable } from '@angular/core';
import { Iproductos, IproductoTecnologia, IproductoInmobiliaria, IproductoMotor } from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastController } from '@ionic/angular';

@Injectable()

export class ListadoProductos {

  constructor(private _db : AngularFireDatabase, private _toastCtrl : ToastController) {}

  async setProducto(producto : Iproductos | IproductoTecnologia | IproductoInmobiliaria | IproductoMotor) {
    const ref = this._db.database.ref("Productos");
    ref.push(producto);
  }

  async updateProducto (producto : Iproductos | IproductoTecnologia | IproductoInmobiliaria | IproductoMotor ) {
    let ref = this._db.database.ref("Productos").child(producto.id);
    ref.set(producto);
  }

  getProductos() : firebase.default.database.Reference {
    return this._db.database.ref("Productos");
  }

  getProductoDetailed(id : string) : Iproductos | IproductoTecnologia | IproductoInmobiliaria | IproductoMotor {
    let producto : Iproductos | IproductoTecnologia | IproductoInmobiliaria | IproductoMotor;
    const ref = this._db.database.ref("Productos/"+id).on('value', child => {
      if (child.val().categoria == 'Tecnología') {
        producto =
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
      } else if (child.val().categoria == 'Motor'){
        producto =
          {
            "propietario" : child.val().propietario,
            "id" : child.key,
            "nombre" : child.val().nombre,
            "descripcion" : child.val().descripcion,
            "categoria" : child.val().categoria,
            "precio" : child.val().precio,
            "tipo" : child.val().tipo,
            "kilometros" : child.val().kilometros,
            "anyo" : child.val().anyo.substring(0,4),
            "like" : child.val().like
          }
      } else if (child.val().categoria == 'Inmobiliaria'){
        producto =
          {
            "propietario" : child.val().propietario,
            "id" : child.key,
            "nombre" : child.val().nombre,
            "descripcion" : child.val().descripcion,
            "categoria" : child.val().categoria,
            "precio" : child.val().precio,
            "metrosCuadrados" : child.val().metrosCuadrados,
            "banyos" : child.val().banyos,
            "habitaciones" : child.val().habitaciones,
            "localidad" : child.val().localidad,
            "like" : child.val().like
          }
      }else{
        producto =
          {
            "propietario" : child.val().propietario,
            "id" : child.key,
            "nombre" : child.val().nombre,
            "descripcion" : child.val().descripcion,
            "categoria" : child.val().categoria,
            "precio" : child.val().precio,
            "like" : child.val().like
          }
      }
    });


    return producto;
  }

  checkUsername(username : string) : boolean {
    let checkUsername : boolean = false;
    const ref = this._db.database.ref("Usuarios");

    ref.on("value", snapshot => {
        snapshot.forEach(child => {
          if (username === child.val().username) {
            checkUsername = true;
          }
        });
    });
    return checkUsername;
  }

}
