import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateModule, TranslateLoader, TranslationObject } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return {
    getTranslation: (lang: string): Observable<TranslationObject> =>
      http.get<TranslationObject>(`./assets/i18n/${lang}.json`)
  };
}

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    importProvidersFrom(
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatSidenavModule,
      MatListModule,
      MatCardModule,
      HttpClientModule,
      TranslateModule.forRoot({
        defaultLanguage: 'es',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })

    )
  ]
});
