import { Component, Input, OnInit } from '@angular/core';

import { ArtistInterface } from 'src/app/shared/types/artist.interface';

@Component({
  selector: 'app-artists-list-item',
  templateUrl: './artists-list-item.component.html',
  styleUrls: ['./artists-list-item.component.scss']
})
export class ArtistsListItemComponent implements OnInit {
  @Input() artist: ArtistInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
