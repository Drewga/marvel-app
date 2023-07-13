import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Character, Comic } from './types';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  private readonly comicsUrlBase = `${environment.apiBase}/comics?apikey=${environment.apiKey}&limit=10&orderBy=title`;
  private readonly charactersUrlBase = `${environment.apiBase}/characters?apikey=${environment.apiKey}&limit=10&orderBy=name`;
  
  constructor(private http: HttpClient) { }

  getComics(offset: number): Observable<Comic[]> {
    const comicsUrl = this.comicsUrlBase + `&offset=${offset}`
    return this.http.get(comicsUrl).pipe(
      map((response: any) => response.data.results)
      )
  }

  getCharacters(offset: number):  Observable<Character[]> {
    const charactersUrl = this.charactersUrlBase + `&offset=${offset}`
    return this.http.get(charactersUrl).pipe(
      map((response: any) => response.data.results)
      )
  }

}
