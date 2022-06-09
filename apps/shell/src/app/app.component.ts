import { Component, OnInit } from '@angular/core';
import { GalleryFacade } from '@mfe-nx/shared/data-store';

@Component({
  selector: 'mfe-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private galleryFacade: GalleryFacade) {}

  ngOnInit(): void {
    this.galleryFacade.init();
  }
}
