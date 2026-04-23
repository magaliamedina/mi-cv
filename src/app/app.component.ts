import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatToolbar } from "@angular/material/toolbar";
import { MatIcon } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isMobile = false;
  isTablet = false;

  constructor(private breakpointObserver: BreakpointObserver, protected translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');

  this.breakpointObserver
    .observe([Breakpoints.Handset])
    .subscribe(result => {

      this.isMobile = result.matches;

    });

}

  downloadCV() {
    window.open('assets/CV_Magali_Anabel_Medina.pdf', '_blank');
  }

  goToGithub() {
    window.open('https://github.com/magaliamedina', '_blank');
  }

  toggleTheme() {

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