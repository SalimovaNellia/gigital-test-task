import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ArtistsApiService } from 'src/app/shared/services/artists-api.service';
import { ArtistInterface } from 'src/app/shared/types/artist.interface';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  public artists: Observable<ArtistInterface[]> = this.artistsService.getArtistsList();
  public sortByOptions: string[] = ['Lowest Price', 'Highest Price']

  constructor(private artistsService: ArtistsApiService) { }

  public ngOnInit(): void {
    this.artistsService.getArtistsList().subscribe(
      (res) => console.log(res)
    )
  }

}
