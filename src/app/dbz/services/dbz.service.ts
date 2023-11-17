import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import {Character} from "../interfaces/character";

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  public addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character};

    this.characters.push(newCharacter);
  }

  public onDeleteCharacterById(id: string): void {
    this.characters = this.characters.filter( character => character.id != id);
  }
}
