import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  usuario: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private userService: UserServiceProvider, public alertCtrl: AlertController) {
    this.usuario = {}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

  createUser() {
    this.userService.post('create', this.usuario).then((datos) => {
      console.log(datos)
      this.showConfirm(datos['text'],true);
    }).catch((error) => {
      console.log(error)
      this.showConfirm(error['text'],false);
    })
  }

  showConfirm(text, error) {
    const confirm = this.alertCtrl.create({
      title: 'Atención',
      message: text,
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            if (error) {
              this.navCtrl.pop();
            }
          }
        }
      ]
    });
    confirm.present();
  }

}
