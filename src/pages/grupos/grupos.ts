import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { CrearGrupoPage } from '../crear-grupo/crear-grupo';
import { MensajesPage } from '../mensajes/mensajes';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the Grupos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-grupos',
  templateUrl: 'grupos.html'
})
export class GruposPage {

  items: FirebaseListObservable<any>;
loader:any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public af:AngularFire, public loadingCtrl: LoadingController) {
         this.loader = this.loadingCtrl.create({
      content: "Espere cargando Salas ..."
    });
    this.loader.present();

     this.items=af.database.list('/grupos',{
  query: {
    orderByChild:'fecha'

  }
});
      this.items.subscribe(()=>{
          this.loader.dismiss();

      })


  }


    goToNuevo(){
        this.navCtrl.push(CrearGrupoPage);
    }
    verGrupo(grupo:any){
      this.navCtrl.push(MensajesPage,{grupo:grupo});
    }
  /*    ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: "Espere cargando Salas ...",
      duration:100
    });
    loader.present();
  }*/


}
