import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";
import { ListadoProductos } from '../services/listado.service';
import { Iproductos, IproductoTecnologia, IproductoInmobiliaria, IproductoMotor } from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.page.html',
  styleUrls: ['./ver-productos.page.scss'],
})
export class VerProductosPage implements OnInit {
  productos : (Iproductos | IproductoTecnologia | IproductoInmobiliaria | IproductoMotor)[] = [];
  producto : (Iproductos | IproductoTecnologia | IproductoInmobiliaria | IproductoMotor);
  isLike : boolean = false;
  username : string = "";


  constructor(private _activatedRoute : ActivatedRoute, private _productList : ListadoProductos, private _toastCtrl : ToastController, private _db : AngularFireDatabase) { }

  async presentToast(value : boolean) {
    if (value) {
      const toast = await this._toastCtrl.create({
        message: 'El producto te ha gustado',
        duration: 1000,
        position: "bottom"
      });
      toast.present();
        
    } else {
      const toast = await this._toastCtrl.create({
        message: 'El producto te ha dejado de gustar',
        duration: 1000,
        position: "bottom"
      });
      toast.present();
    }
  }

  buttonLike(id : string) {
    this.producto = this._productList.getProductoDetailed(id);
    let likes : string [] = [];

    for (const [id, value] of Object.entries(this.producto.like)) {
      likes.push(value.toString());
      console.log(likes);
    }
    
    let user = this.username;
    let found = -1;

    let i = 0
    likes.forEach(element => {
      if (element == user) {
        found = i;
      }
      i++;
    });

    if (found > -1) {
      likes.splice(found, 1);
      this.presentToast(false);
    } else {
      likes.push(user);
      this.presentToast(true);
    }

    console.log(likes.indexOf(user));

    this.producto.like = likes;

    this._productList.updateProducto(this.producto);

    
  }

  ngOnInit() {
    this.username = this._activatedRoute.snapshot.paramMap.get('username');
    
    const ref = this._productList.getProductos();
    ref.on("value", snapshot => {
      this.productos = [];
      snapshot.forEach(child => {

        if (child.val().categoria == 'Tecnología') { 
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

         
        } else if (child.val().categoria == 'Motor'){
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
        } else if (child.val().categoria == 'Inmobiliaria'){
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
        }else{
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
    })
  }

}
