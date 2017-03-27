import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire } from 'angularfire2';

/*
  Generated class for the CrearGrupo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-crear-grupo',
  templateUrl: 'crear-grupo.html'
})
export class CrearGrupoPage {

    grupo={titulo:'',descripcion:'', fecha:'',usuarios:'0'};

  constructor(public navCtrl: NavController, public navParams: NavParams, public af:AngularFire) {


  }

enviar(){
     this.grupo.fecha=(2490517872128-new Date().getTime()).toString();
 this.af.database.list('/grupos').push(this.grupo);

    this.navCtrl.pop();
}

}
