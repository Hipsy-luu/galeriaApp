import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Punto de Venta',
      url: '/pv',
      icon: 'home'
    },
    {
      title: 'Historial de Transacciones',
      url: '/history-trans',
      icon: 'list'
    },
    {
      title: 'Clientes',
      url: '/customers',
      icon: 'list'
    },
    {
      title: 'Artistas',
      url: '/artists',
      icon: 'list'
    },
    {
      title: 'Obras',
      url: '/works',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
