import { Component, OnInit } from '@angular/core';
import { Iproductos, IproductoTecnologia, IproductoInmobiliaria, IproductoMotor } from '../interfaces';
import { ListadoProductos } from '../services/listado.service';
import { ActivatedRoute } from '@angular/router';
import { PickerOptions } from '@ionic/core';
import { PickerController, ToastController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-modificar-productos',
  templateUrl: './modificar-productos.page.html',
  styleUrls: ['./modificar-productos.page.scss'],
})
export class ModificarProductosPage implements OnInit {
  producto : (Iproductos | IproductoTecnologia | IproductoInmobiliaria | IproductoMotor);
  username : string;
  propietario : string = this.username;
  id : string;
  categoria : string;

  constructor( private _activatedRoute : ActivatedRoute, private _productList : ListadoProductos, private _pickerCtrl : PickerController, private _toastCtrl : ToastController) { }

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this.username = this._activatedRoute.snapshot.paramMap.get('username');
    this.producto = this._productList.getProductoDetailed(this.id);
    this.categoria = this.producto.categoria;
    this.producto.propietario = this.username;
  }

  async showBasicPicker() {
    let opts: PickerOptions = {
      buttons: [
        {
          text: 'Hecho'
        }
      ],
      columns: [
        {
          name: 'categoria',
          options: [
            { text: 'Hogar', value: 'hogar' },
            { text: 'Tecnología', value: 'tecnologia' },
            { text: 'Inmobiliaria', value: 'inmobiliaria' },
            { text: 'Motor', value: 'motor' },
          ]
        }
      ]
    };
    let picker = await this._pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('categoria');
      this.categoria = col.options[col.selectedIndex].text;
    });
  }

  async presentToastUpdate() {
    const toast = await this._toastCtrl.create({
      message: 'Producto actualizado correctamente',
      duration: 1000,
      position: "bottom"
    });
    toast.present();
  }

  async updateProduct() {
    this._productList.updateProducto(this.producto);
    this.presentToastUpdate();
  }

}
