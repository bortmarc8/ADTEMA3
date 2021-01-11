import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ListadoProductos } from '../services/listado.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username : string;

  constructor(private _productList : ListadoProductos, private _routerNavigate : Router, private _toastCtrl : ToastController) { }

  ngOnInit() {

  }

  checkUser() {
    if (this._productList.checkUsername(this.username)) {
      this._routerNavigate.navigate(['/home/',this.username]);
    }else{
      this.presentToast()
    }
  }

  async presentToast() {
    const toast = await this._toastCtrl.create({
      message: 'Las credenciales son incorrectas, intentalo de nuevo',
      duration: 1000,
      position: "bottom"
    });
    toast.present();
  }

}
