import { Injectable, signal, effect } from '@angular/core';
import { Character } from '../interfaces/character.interface';

function loadCharactersFromLocaleStorage(): Character[] {
    const data = localStorage.getItem('dragonball_characters');
    let characters: Character[] = [];

    if (data) {
        const parsedData = JSON.parse(data);
        if (!Array.isArray(parsedData)) {
            characters = [];
        }
        for (const item of parsedData) {
            if (typeof item.id !== 'number' || typeof item.name !== 'string' || typeof item.power !== 'number') {
                characters = [];
                break;
            }
        }
        characters = parsedData;
    }

    return characters;
}

@Injectable({ providedIn: 'root' })
export class DragonballService {

    characters = signal<Character[]>(loadCharactersFromLocaleStorage());

    saveToLocaleStorage = effect(() => {
        localStorage.setItem('dragonball_characters', JSON.stringify(this.characters()));
    });

    addCharacter(newCharacter: Character): void {
        this.characters.update(characters => [...characters, newCharacter]);
    }

}