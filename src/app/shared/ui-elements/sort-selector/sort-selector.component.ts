import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { SortArtistByEnum } from 'src/app/shared/enums/SortArtistByEnum';

@Component({
  selector: 'app-sort-selector',
  templateUrl: './sort-selector.component.html',
  styleUrls: ['./sort-selector.component.scss']
})
export class SortSelectorComponent implements OnInit {
  @Output() sortOptionSelected: EventEmitter<number> = new EventEmitter<number>();

  public SORT_BY_OPTIONS = SortArtistByEnum;
  public form: FormGroup;

  public constructor() {}

  public ngOnInit(): void {
    this.initValues();
  }

  private initValues(): void {
    this.form = new FormGroup({
      sortBy: new FormControl('')
    })
  }

  public selectFilter(filterOption: number): void {
    this.sortOptionSelected.emit(filterOption);
  }

}
