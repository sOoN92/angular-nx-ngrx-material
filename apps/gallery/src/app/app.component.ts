import { Component, OnInit } from '@angular/core';
import { GalleryFacade } from '@mfe-nx/shared/data-store';

@Component({
  selector: 'mfe-nx-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit{

  constructor(private galleryFacade: GalleryFacade) {}

  ngOnInit(): void {
    this.galleryFacade.init();
  }

}
