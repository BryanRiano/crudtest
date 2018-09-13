import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the EdituserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edituser',
  templateUrl: 'edituser.html',
})
export class EdituserPage {

  usuario: any;
  navParam: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private userService: UserServiceProvider, public alertCtrl: AlertController) {
    this.usuario = {}
    this.navParam = navParams.get('cedula');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EdituserPage');
    this.getUser()
  }

  getUser() {
    this.userService.get('list/', this.navParam).then((datos) => {
      console.log(datos)
      this.usuario = datos['datos'];
    }).catch((error) => {
      console.log(error)
    })
  }

  editUser() {
    this.userService.post('update', this.usuario).then((datos) => {
      console.log(datos)
      this.showConfirm(datos['text'],true);
    }).catch((error) => {
      console.log(error)
      this.showConfirm(error['text'],false);
    })
  }

  deleteUser() {
    this.userService.post('delete', this.usuario).then((datos) => {
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
