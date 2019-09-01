import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {
  usuarios
  constructor(public navCtrl: NavController, public _proveedor1Provider: Proveedor1Provider) {
    
  }
  ngOnInit(){
    this._proveedor1Provider.getUsuarios()
      .subscribe((data)=>{
        this.usuarios = data;
      }, (error) =>{
        console.log(error);
      });
  }

}
