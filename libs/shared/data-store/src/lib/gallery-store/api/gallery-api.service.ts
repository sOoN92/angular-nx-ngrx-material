import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GalleryEntity } from '../+state/gallery.models';

@Injectable({
  providedIn: 'root',
})
export class GalleryApiService {
  constructor(private http: HttpClient) {}

  getCatsList(): Observable<GalleryEntity[]> {
    const limit = 20;
    const url = `https://api.thecatapi.com/v1/breeds?limit=${limit}`;

    return this.http.get(url).pipe(
      map((response: any) => {
        const cats: GalleryEntity[] = [];
        response.forEach((res: any) => {
          const { description, id, image, name, origin } = res;
          const url = image.url;

          if (url) {
            cats.push({
              id,
              title: name,
              description,
              origin,
              url,
            });
          }
        });
        return cats;
      })
    );
  }
}
