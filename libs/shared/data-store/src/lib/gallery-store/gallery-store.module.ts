import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromGallery from './+state/gallery.reducer';
import { GalleryEffects } from './+state/gallery.effects';
import { GalleryFacade } from './+state/gallery.facade';
import { GalleryApiService } from './api/gallery-api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CatsInterceptor } from './interceptor/cats.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(
      fromGallery.GALLERY_FEATURE_KEY,
      fromGallery.reducer
    ),
    EffectsModule.forFeature([GalleryEffects]),
  ],
  providers: [
    GalleryFacade,
    GalleryApiService,
    { provide: HTTP_INTERCEPTORS, useClass: CatsInterceptor, multi: true },
  ],
})
export class GalleryStoreModule {}
