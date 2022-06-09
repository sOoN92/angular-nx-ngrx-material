import { Component } from '@angular/core';
import { GalleryFacade } from '@mfe-nx/shared/data-store';
import { map } from 'rxjs';

@Component({
  selector: 'mfe-nx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cats$ = this.galleryFacade.selectedCats$.pipe(
    map((selectedCats: any) => Array.from(selectedCats.values()))
  ) as any;

  constructor(private galleryFacade: GalleryFacade) {}
}
