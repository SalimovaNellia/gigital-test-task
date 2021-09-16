import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TagInterface } from 'src/app/shared/types/tag.interface';

@Component({
  selector: 'app-data-filter',
  templateUrl: './data-filter.component.html',
  styleUrls: ['./data-filter.component.scss']
})
export class DataFilterComponent implements OnInit {
  @Output() filteringTagsSelected$: EventEmitter<number[]> = new EventEmitter<number[]>();
  @Input() filteringTags: TagInterface[];

  public filteringTagsSelected: number[] = [];

  public constructor() { }

  public ngOnInit(): void {}

  public changeFiltering(isChecked: boolean, tagId: number): void {
    const index = this.filteringTagsSelected.indexOf(tagId);
    if (index !== -1) {
      this.filteringTagsSelected.splice(index, 1);
    } else {
      this.filteringTagsSelected.push(tagId);
    }

    this.filteringTagsSelected$.emit(this.filteringTagsSelected);
  }

  public clearAllFilters(): void {
    this.filteringTagsSelected = [];
    this.filteringTagsSelected$.emit(this.filteringTagsSelected);
  }

  public isFilterChecked(tagId: number): boolean {
    return this.filteringTagsSelected.includes(tagId);
  }

}
