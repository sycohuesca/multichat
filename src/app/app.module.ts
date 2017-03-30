import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyTabsPage } from '../pages/my-tabs/my-tabs';
import { GruposPage } from '../pages/grupos/grupos';
import { MapaPage } from '../pages/mapa/mapa';
import { UsuarioPage } from '../pages/usuario/usuario';
import { MensajesPage } from '../pages/mensajes/mensajes';
import { CrearGrupoPage } from '../pages/crear-grupo/crear-grupo';
import { CrearUsuarioPage } from '../pages/crear-usuario/crear-usuario';
import { CrearMensajePage } from '../pages/crear-mensaje/crear-mensaje';
import { AngularFireModule } from 'angularfire2';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { LocalNotifications } from '@ionic-native/local-notifications';

export const firebaseConfig = {
  apiKey: 'AIzaSyCd7fI2t2F7upJWH8CcTlMlsgjWEVqybRU',
  authDomain: 'pmdm-41fb0.firebaseapp.com',
  databaseURL: 'https://pmdm-41fb0.firebaseio.com',
  storageBucket: 'pmdm-41fb0.appspot.com',
  messagingSenderId: '95684668696'
};


@NgModule({
  declarations: [
    MyApp,
      MyTabsPage,
      GruposPage,
      MapaPage,
      UsuarioPage,
      MensajesPage,
      CrearGrupoPage,
      CrearMensajePage,
      CrearUsuarioPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
       AngularFireModule.initializeApp(firebaseConfig),
       IonicStorageModule.forRoot(),
       AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCPxpzBxMnYclH-uOehpF8uoyl7lHguqW4'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

      MyTabsPage,
      GruposPage,
      MapaPage,
      UsuarioPage,
      MensajesPage,
      CrearGrupoPage,
      CrearMensajePage,
      CrearUsuarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {}
