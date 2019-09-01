import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { MasinfoPage } from '../masinfo/masinfo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alerCtrl: AlertController) {

  }
  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'New Friend!',
      message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
      buttons: ['Entendido']
    });
    alert.present()
  }
  showPrompt() {
    const prompt = this.alerCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked', data);
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked', data);
          }
        }
      ]
    });
    prompt.present();
  }

}
