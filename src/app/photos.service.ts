import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface UnsplashResponse {
  urls: {
    regular: string;
  };
}
@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhoto(): Observable<any> {
    return this.http.get<UnsplashResponse>(
      'https://api.unsplash.com/photos/random',
      {
        headers: {
          Authorization:
            'Client-ID DKOAnbS8BOP1g3VEBBXpDg8K4cOPLw-CnoAuzJhh6G8',
        },
      }
    );
  }
}
