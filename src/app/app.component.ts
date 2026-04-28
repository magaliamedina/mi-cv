import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule,
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
  isDark = false;

  constructor(private breakpointObserver: BreakpointObserver, protected translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');

  this.breakpointObserver
    .observe([Breakpoints.Handset])
    .subscribe(result => {

      this.isMobile = result.matches;

    });

}

ngOnInit() {

  const savedTheme = localStorage.getItem('theme');

  // Si nunca se guardó tema → usar dark por defecto
  if (!savedTheme || savedTheme === 'dark') {

    this.isDark = true;
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');

    localStorage.setItem('theme', 'dark');

  } else {

    this.isDark = false;
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');

  }

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
      this.isDark = false;
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      this.isDark = true;
    }
  }

  getSkillItems(path: string): string[] {
    const rawText = this.translate.instant(path);
    if (typeof rawText !== 'string') return [];

    return rawText
      .split(',')
      .map(item => item.trim())
      .filter(Boolean);
  }

}