import { Component } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  titulo : string = 'QuickTrade';
  categoria : string = 'Categoría';

  constructor(private pickerCtrl: PickerController) {}

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
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('categoria');
      this.categoria = col.options[col.selectedIndex].text;
    });
  }



}
