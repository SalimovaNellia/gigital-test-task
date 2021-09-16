import { MatSelectModule } from '@angular/material/select';
import { ArtistsComponent } from './artists.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArtistsListItemComponent } from 'src/app/artists/components/artists-list-item/artists-list-item.component';
import { ArtistsApiService } from 'src/app/shared/services/artists-api.service';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: 'artists',
    component: ArtistsComponent
  }
];

@NgModule({
  declarations: [
    ArtistsComponent,
    ArtistsListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatSelectModule,
    SharedModule,
  ],
  providers: [
    ArtistsApiService
  ]
})
export class ArtistsModule { }
