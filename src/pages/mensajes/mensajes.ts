import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { LoadingController } from 'ionic-angular';
import { CrearMensajePage } from '../crear-mensaje/crear-mensaje';
import { ToastController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Storage } from '@ionic/storage';
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
    nick:String="";
    noti:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public af:AngularFire, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public localNotifications: LocalNotifications,  public storage:Storage) {

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
    ionViewWillEnter(){
         this.storage.get('nick').then(val=>{
            this.nick=val;
        });
    }
seguir(){


     let toast=this.toastCtrl.create({
      message: 'Notificaciones activadas.',
      duration: 1000,
         position: 'top'
    });
     toast.present();

      this.items.subscribe(val=>{
       if(val[0].autor!=this.nick){
                       if(this.prim ){
                           let data=new Date().toLocaleTimeString();
this.localNotifications.schedule({
  id: this.noti,
    title:'Multichat de '+val[0].autor,
  text: val[0].texto,
 led: '3DE42B',
   sound: 'file://assets/sound.ogg',
    at:data,
    icon:'res://icon.png'
});
                             console.log(val[0]) ;
                           this.noti=this.noti+1;

       }
             }

          this.prim=true;


  });
}



}
