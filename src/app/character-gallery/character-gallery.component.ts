import { Component, OnInit } from '@angular/core';
import { Character } from '../types';
import { MarvelApiService } from '../marvel-api.service';

@Component({
  selector: 'app-character-gallery',
  templateUrl: './character-gallery.component.html',
  styleUrls: ['./character-gallery.component.css']
})
export class CharacterGalleryComponent implements OnInit {
  characters: Character[] = [];
  
  constructor(private marvelApi: MarvelApiService) {}
  
  get offset() {
    return this.characters ? this.characters.length : 0;
  }

  ngOnInit(): void {
    this.loadCharacters(this.offset);
  }

  loadCharacters(offset: number) {
    this.marvelApi.getCharacters(offset)
    .subscribe((characters) => this.characters.push(...characters))
  }
}

