import { ArtistsComponent } from './artists.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArtistsListItemComponent } from './components /artists-list-item/artists-list-item.component';
import {MatCardModule} from "@angular/material/card";
import {ArtistsApiService} from "../shared/services/artists-api.service";
import {HttpClient} from "@angular/common/http";

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
  ],
  providers: [
    ArtistsApiService
  ]
})
export class ArtistsModule { }
