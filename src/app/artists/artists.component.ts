import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

import { ArtistsApiService } from 'src/app/shared/services/artists-api.service';
import { SortArtistByEnum } from 'src/app/shared/enums/SortArtistByEnum';
import { ArtistInterface } from 'src/app/shared/types/artist.interface';
import { TagInterface } from 'src/app/shared/types/tag.interface';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  public selectedFilterOptions$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  public selectedSortOption$: BehaviorSubject<number>;
  public artists$: Observable<ArtistInterface[]>;

  public filteringTags: TagInterface[] = [];

  constructor(private artistsService: ArtistsApiService) { }

  public ngOnInit(): void {
    this.initValues();
  }

  public initValues(): void {
    this.selectedSortOption$ = new BehaviorSubject<number>(2);
    this.initArtistsData();
  }

  public initArtistsData(): void {
    this.artists$ = combineLatest([
      this.selectedSortOption$,
      this.selectedFilterOptions$
    ]).pipe(
      switchMap(([sortOption, filters]: [number, number[]]) => {
        const dataSubscription$: Observable<ArtistInterface[]> =
          this.artistsService.getArtistsList()
            .pipe(
              tap(artists => this.getAllArtistsTags(artists)),
              map(artists => this.filterArtistsArray(artists, filters)),
              );

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
        }
        return dataSubscription$;
      })
    )
  }

  public getAllArtistsTags(artists: ArtistInterface[]): void {
    artists.forEach(
      (artist: ArtistInterface) =>
        artist.tags.forEach(tag => {
          if (!(this.filteringTags.filter(elem => elem.id === tag.id).length > 0)) {
            this.filteringTags.push(tag)
          }
        })
    )
  }

  public onFiltersSelected(filters: number[]): void {
    this.selectedFilterOptions$.next(filters);
  }

  public filterArtistsArray(artists: ArtistInterface[], filters: number[]): ArtistInterface[] {
    let filteredArtists = artists;
    if (filters && filters.length > 0) {
      filteredArtists = artists.filter(artist => {
        return filters.every(filter => artist.tags.map(tag => tag.id).includes(filter))
      })
    }
    return filteredArtists;
  }

}
