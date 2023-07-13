import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../marvel-api.service';
import { Comic } from '../types';

@Component({
  selector: 'app-comic-gallery',
  templateUrl: './comic-gallery.component.html',
  styleUrls: ['./comic-gallery.component.css']
})
export class ComicGalleryComponent implements OnInit {
  comics: Comic[] = [];
  
  constructor(private marvelApi: MarvelApiService) {}
  
  get offset() {
    return this.comics ? this.comics.length : 0;
  }

  ngOnInit(): void {
    this.loadComics(this.offset);
  }

  loadComics(offset: number) {
    this.marvelApi.getComics(offset)
    .subscribe((comics) => this.comics.push(...comics))
  }
}
