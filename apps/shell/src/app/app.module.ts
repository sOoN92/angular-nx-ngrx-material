import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mfe';
import { environment } from '../environments/environment';

import { HomeComponent } from './home/home.component';
import { GalleryStoreModule } from '@mfe-nx/shared/data-store';
import { UiModule } from '@mfe-nx/ui';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    UiModule,
    RouterModule.forRoot(
      [
        {
          path: 'gallery',
          loadChildren: () =>
            loadRemoteModule('gallery', './Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
        {
          path: '',
          component: HomeComponent,
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument( { serialize: true }) : [],
    GalleryStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
