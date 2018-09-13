import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { EditPage } from '../edit/edit';
import { EdituserPage } from '../edituser/edituser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any[] = [];

  constructor(public navCtrl: NavController, public userService: UserServiceProvider) {
      this.getUsers();
  }

  ionViewDidLoad(){
    this.getUsers();
  }

  ionViewWillEnter() {
    this.getUsers()
  }

  getUsers() {
    this.userService.get('list','').then((datos) => {
      this.users = datos['datos'];
    }).catch((error) => {
      console.log(error);
    })
  }

  goAnOtherPage() {
    this.navCtrl.push(EditPage);
  }

  itemSelected(item) {
    this.navCtrl.push(EdituserPage, {'cedula':item});
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
