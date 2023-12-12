import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http:HttpClient
  ) { }

  getCharacters():Observable<Character[]>{

    const url: string = `https://stand-by-me.herokuapp.com/api/v1/characters`;

    return this.http.get<Character[]>(url);
    

  }

  

}
