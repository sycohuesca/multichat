import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CrearUsuarioPage } from '../crear-usuario/crear-usuario';
import { Storage } from '@ionic/storage';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

/*
  Generated class for the Usuario page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html'
})
export class UsuarioPage {



  item: FirebaseObjectObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public af:AngularFire) {
 this.cargar();

  }
    editarNick(){
       this.navCtrl.push(CrearUsuarioPage);
    }

ionViewWillEnter(){
 this.cargar();

}
cargar(){
       this.storage.get('id').then((val) => {
         this.item=this.af.database.object('/usuarios/'+val);


     });
}
}
