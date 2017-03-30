import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { LoadingController } from 'ionic-angular';
import { CrearMensajePage } from '../crear-mensaje/crear-mensaje';
/*
  Generated class for the Mensajes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mensajes',
  templateUrl: 'mensajes.html'
})
export class MensajesPage {

 items: FirebaseListObservable<any[]>;
  grupo:any=[];
   prim:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public af:AngularFire, public loadingCtrl: LoadingController) {

  this.grupo=navParams.get('grupo');

     this.items = af.database.list('/grupos/'+this.grupo.$key+'/mensajes',{
  query: {
    orderByChild:'fecha'

  }
});

  }
enviarMensaje(){
    this.navCtrl.push(CrearMensajePage,{grupo:this.grupo.$key});
}


    ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: "Espere cargando Mensajes ...",
      duration: 100
    });
    loader.present();
  }
seguir(){

      this.items.subscribe(val=>{

        console.log('es la segunda') ;

  });
}



}
