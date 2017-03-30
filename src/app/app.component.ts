import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoadingController } from 'ionic-angular';
import { MyTabsPage } from '../pages/my-tabs/my-tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = MyTabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, loadingCtrl: LoadingController) {
    platform.ready().then(() => {
       let loader=loadingCtrl.create({
      content: "Espere cargando App ..." ,
           duration:1000
    });
    loader.present();
      statusBar.styleDefault();
      splashScreen.hide();


    });
  }
}
