import { ArtistsComponent } from './artists/artists.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'artists',
    component: ArtistsComponent
  }
];

@NgModule({
  declarations: [
    ArtistsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ArtistsModule { }
