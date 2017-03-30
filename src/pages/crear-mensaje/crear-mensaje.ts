import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the CrearMensaje page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-crear-mensaje',
  templateUrl: 'crear-mensaje.html'
})
export class CrearMensajePage {
    grupo:String="";
  id:String;
    mensaje={autor:"sin autor",texto:"",fecha:""};

  constructor(public navCtrl: NavController, public navParams: NavParams,public af:AngularFire, public storage:Storage, public toastCtrl: ToastController) {
      this.grupo=navParams.get('grupo');
        storage.get('nick').then((val) => {
      this.mensaje.autor=val;

       });
        storage.get('id').then((val) => {
      this.id=val;

       });

  }
enviar(){
   this.mensaje.fecha=(2490517872128-new Date().getTime()).toString();

   this.af.database.list('/grupos/'+this.grupo+'/mensajes').push(this.mensaje);
   // this.af.database.list('/usuarios/'+this.id+'/grupos').push({grupoId:this.grupo});
     let toast=this.toastCtrl.create({
      message: 'Mensaje enviado.',
      duration: 1000,
         position: 'top'
    });
     toast.present();
    this.navCtrl.pop();
}


}
