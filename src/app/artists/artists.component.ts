import { Component, OnInit } from '@angular/core';

import { ArtistsApiService } from 'src/app/shared/services/artists-api.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  constructor(private artistsService: ArtistsApiService) { }

  ngOnInit(): void {
    this.artistsService.getArtistsList()
      .subscribe(
        (res) => {
          console.log(res)}
      )
  }

}
