import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public patientPages = [
    {
      title: "Home",
      url: "/home",
      icon: "home",
    },
    {
      title: "New Patient Registration",
      url: "/new-patient-registration",
      icon: "document-text",
    }
    
  ];
  public clinicPages = [
    {
      title: "Clinic",
      url: "/clinic",
      icon: "medkit",
    },
  ];
  public devPages = [
    {
      title: "Form Elements",
      url: "/form",
      icon: "list",
    },
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

  ngOnInit() {}
}
