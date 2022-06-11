import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryStoreModule } from './gallery-store/gallery-store.module';

@NgModule({
  imports: [CommonModule, GalleryStoreModule],
})
export class SharedDataStoreModule {}
