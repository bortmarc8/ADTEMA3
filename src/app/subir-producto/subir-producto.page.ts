import { Component, OnInit } from '@angular/core';
import { PickerController, ToastController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { Iproductos, IproductoTecnologia, IproductoInmobiliaria, IproductoMotor } from '../interfaces';
import { ListadoProductos } from '../services/listado.service';

@Component({
  selector: 'app-subir-producto',
  templateUrl: './subir-producto.page.html',
  styleUrls: ['./subir-producto.page.scss'],
})
export class SubirProductoPage {
  nombre : string;
  descripcion : string;
  categoria : string = 'Hogar';
  precio : number;
  estado : string;
  mCuadrados : number;
  banyos : number;
  habitaciones : number;
  localidad : string;
  tipoVehiculo : string;
  kilometros : number;
  anyo : string;

  productos : (Iproductos | IproductoTecnologia | IproductoInmobiliaria | IproductoMotor)[] = [];

  constructor(private _pickerCtrl : PickerController, private _toastCtrl : ToastController, private _productList : ListadoProductos) {}

  async presentToast() {
    const toast = await this._toastCtrl.create({
      message: 'Los cambios se han guardado correctamente',
      duration: 1000,
      position: "bottom"
    });
    toast.present();
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
            { text: 'Tecnología', value: 'tecnologia' },
            { text: 'Hogar', value: 'hogar' },
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

  async insertar() {
    if (this.categoria == 'Tecnología') {
      this._productList.setProducto(
        {
          "id" : '',
          "nombre" : this.nombre,
          "descripcion" : this.descripcion,
          "categoria" : this.categoria,
          "precio" : this.precio,
          "estado" : this.estado
        }
      )
    } else if (this.categoria == 'Motor'){
      this._productList.setProducto(
        {
          "id" : '',
          "nombre" : this.nombre,
          "descripcion" : this.descripcion,
          "categoria" : this.categoria,
          "precio" : this.precio,
          "tipo" : this.tipoVehiculo,
          "kilometros" : this.kilometros,
          "anyo" : this.anyo.substring(0,4)
        }
      );
    } else if (this.categoria == 'Inmobiliaria'){
      this._productList.setProducto(
        {
          "id" : '',
          "nombre" : this.nombre,
          "descripcion" : this.descripcion,
          "categoria" : this.categoria,
          "precio" : this.precio,
          "metrosCuadrados" : this.mCuadrados,
          "banyos" : this.banyos,
          "habitaciones" : this.habitaciones,
          "localidad" : this.localidad
        }
      );
    }else{
      this._productList.setProducto(
        {
          "id" : '',
          "nombre" : this.nombre,
          "descripcion" : this.descripcion,
          "categoria" : this.categoria,
          "precio" : this.precio
        }
      );
    }
    this.presentToast();
  }

}
