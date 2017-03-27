import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GruposPage } from '../grupos/grupos';
import { MapaPage } from '../mapa/mapa';
import { UsuarioPage } from '../usuario/usuario';

/*
  Generated class for the MyTabs tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-my-tabs',
  templateUrl: 'my-tabs.html'
})
export class MyTabsPage {
  tab1Root: any = UsuarioPage;
  tab2Root: any = GruposPage;
  tab3Root: any = MapaPage;

  constructor(public navCtrl: NavController) {

  }

}
