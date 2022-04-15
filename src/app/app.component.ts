import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const logos = [
  {
    "logo_name": "google_logo",
    "logo_url": "https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg"
  },
  {
    "logo_name": "app_logo",
    "logo_url": "../assets/img/logo.svg"
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    logos.forEach(svg => {
      this.matIconRegistry.addSvgIcon(
        svg.logo_name, this.domSanitizer.bypassSecurityTrustResourceUrl(svg.logo_url)
      );
    });
  }
}
