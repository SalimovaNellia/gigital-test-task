import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SortSelectorComponent } from 'src/app/shared/ui-elements/sort-selector/sort-selector.component';


@NgModule({
  declarations: [
    SortSelectorComponent
  ],
  exports: [
    SortSelectorComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,

    MatFormFieldModule,
    MatSelectModule
  ]
})
export class SharedModule { }
