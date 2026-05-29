import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
})
export class DragonballCharacterAdd {
  protected name = signal('');
  protected power = signal(0);

  newCharacter = output<Character>();


  protected addCharacter(): void {
    if (!this.name() || !this.power() || this.power() <= 0) return;
    const newCharacter = {
      id: Math.floor(Math.random() * 100000),
      name: this.name(),
      power: this.power()
    };

    this.newCharacter.emit(newCharacter);

    this.resetFields();
  }

  private resetFields(): void {
    this.name.set('');
    this.power.set(0);
  }
}
