import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
//import { SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow } from
//'angular2-google-maps/core';


/*
  Generated class for the Mapa page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mapa',

  templateUrl: 'mapa.html'
})
export class MapaPage {
      items: FirebaseListObservable<any>;
miCoo={lat:0,lng:0};


  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,  public af:AngularFire,) {
     this.items=af.database.list('/usuarios');

  }
    ionViewWillEnter(){
       this.storage.get('lat').then((val) => {
       this.miCoo.lat=+val;
       });
      this.storage.get('long').then((val) => {
       this.miCoo.lng=+val;
       });
    }

}

