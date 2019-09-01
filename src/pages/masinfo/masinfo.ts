import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-masinfo',
  templateUrl: 'masinfo.html',
})
export class MasinfoPage {
  item: any;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.item = params.data.item;
  }

}