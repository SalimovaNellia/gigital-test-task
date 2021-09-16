import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';

import { ArtistsApiService } from 'src/app/shared/services/artists-api.service';
import { SortArtistByEnum } from 'src/app/shared/enums/SortArtistByEnum';
import { ArtistInterface } from 'src/app/shared/types/artist.interface';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  public selectedSortOption$: BehaviorSubject<number>;
  public artists$: Observable<ArtistInterface[]>;

  constructor(private artistsService: ArtistsApiService) { }

  public ngOnInit(): void {
    this.initValues();
  }

  public initValues(): void {
    this.selectedSortOption$ = new BehaviorSubject<number>(2);

    this.artists$ = combineLatest([
      this.selectedSortOption$
    ]).pipe(
      switchMap(([sortOption]: [number]) => {
        const dataSubscription$ = this.artistsService.getArtistsList();

        switch (sortOption) {

          case SortArtistByEnum.LOWEST_PRICE: {
            return dataSubscription$.pipe(
              map((artists: ArtistInterface[]) => artists.sort(
                (low: ArtistInterface, high: ArtistInterface) => low.price - high.price)),
            )
          }

          case SortArtistByEnum.HIGHEST_PRICE: {
            return dataSubscription$.pipe(
              map((artists: ArtistInterface[]) => artists.sort(
                (low: ArtistInterface, high: ArtistInterface) => high.price - low.price)),
            )
          }

          default: return dataSubscription$;
        }
      })
    )
  }
}
