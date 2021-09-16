import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SortSelectorComponent } from 'src/app/shared/ui-elements/sort-selector/sort-selector.component';
import { DataFilterComponent } from 'src/app/shared/ui-elements/data-filter/data-filter.component';


@NgModule({
  declarations: [
    SortSelectorComponent,
    DataFilterComponent
  ],
  exports: [
    SortSelectorComponent,
    DataFilterComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,

    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class SharedModule { }
