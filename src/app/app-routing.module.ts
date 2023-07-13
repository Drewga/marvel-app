import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterGalleryComponent } from './character-gallery/character-gallery.component';
import { ComicGalleryComponent } from './comic-gallery/comic-gallery.component';

const routes: Routes = [
  {path: 'characters', component: CharacterGalleryComponent},
  {path: 'comics', component: ComicGalleryComponent},
  {path: '', redirectTo: 'characters', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
