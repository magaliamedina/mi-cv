import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbar } from "@angular/material/toolbar";
import { MatIcon } from "@angular/material/icon";
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from "@angular/material/sidenav";
import { MatCard, MatCardTitle, MatCardContent } from "@angular/material/card";
import { MatList, MatListItem } from "@angular/material/list";
import { TranslateService } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar, MatIcon, MatSidenavContainer, MatSidenav, MatCard, MatCardTitle, MatCardContent, MatList, MatListItem, MatSidenavContent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-cv';
  //constructor(private translate: TranslateService) {
    //this.translate.setDefaultLang('es');
  //}

  switchLang(lang: string) {
    //this.translate.use(lang);
  }

  downloadCV() {
    window.open('assets/CV_Magali_Medina.pdf', '_blank');
  }

  goToGithub() {
    window.open('https://github.com/magaliamedina', '_blank');
  }

  toggleTheme() {
    // document.body.classList.toggle('dark-mode');
    // document.body.classList.toggle('light-mode');
    const body = document.body;
      if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
      } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
      }
  }

}
