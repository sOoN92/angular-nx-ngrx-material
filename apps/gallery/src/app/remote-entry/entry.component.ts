import { Component } from '@angular/core';
import { GalleryFacade } from '@mfe-nx/shared/data-store';

@Component({
  selector: 'mfe-nx-gallery-entry',
  templateUrl: 'entry.component.html',
  styleUrls: ['entry.component.scss'],
})
export class RemoteEntryComponent {
  cats$ = this.galleryFacade.allGallery$ as any;
  selectedCats = this.galleryFacade.selectedCats$;

  constructor(private galleryFacade: GalleryFacade) {}

  toggleSelectCat(cat: any) {
    this.galleryFacade?.toggleSelectCat(cat);
  }
  isSelected(catId: any) {
    return this.galleryFacade?.isCatSelected(catId);
  }
}
