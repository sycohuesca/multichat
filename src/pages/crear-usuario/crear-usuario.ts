import { Component } from '@angular/core';
import { NavController, NavParams, Platform  } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the CrearUsuario page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-crear-usuario',
  templateUrl: 'crear-usuario.html'
})
export class CrearUsuarioPage {
   usuario={nick:"",long:"",lat:""}

  constructor(public navCtrl: NavController, public navParams: NavParams, public af:AngularFire,  public storage: Storage, private platform: Platform, private geolocation: Geolocation, public toastCtrl: ToastController) {
  platform.ready().then(() => {

      // get current position
      geolocation.getCurrentPosition().then(pos => {
          this.usuario.long=pos.coords.longitude.toString();
         this.usuario.lat=pos.coords.latitude.toString();
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      });



    });
  }

 enviar(){
    let id=this.af.database.list('/usuarios').push(this.usuario).key;

    let toast=this.toastCtrl.create({
      message: 'Usuario creado.',
      duration: 3000,
         position: 'top'
    });
     toast.present();

    this.storage.set('nick', this.usuario.nick);
   this.storage.set('long', this.usuario.long);
   this.storage.set('lat', this.usuario.lat);
    this.storage.set('id', id);
   this.navCtrl.pop();

    }


}
