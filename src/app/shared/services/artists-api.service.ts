import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ArtistInterface } from 'src/app/shared/types/artist.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistsApiService {

  constructor(private http: HttpClient) { }

  public getArtistsList(): Observable<ArtistInterface[]> {
    return this.http
      .get<ArtistInterface[]>(environment.apiUrl + '/artists/list')
  }
}
