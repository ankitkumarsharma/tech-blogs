import { RouterModule } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(HomeComponent,{
  providers:[
    importProvidersFrom(
      RouterModule.forRoot([])
    )
  ]
}).catch(err => console.error(err));

