// import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [
    // NgClass
  ],
  templateUrl: './dragonball-page.html',
  styleUrl: './dragonball-page.css'
})
export class DragonballPage {
  protected characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 },
    // { id: 2, name: 'Vegeta', power: 8500 },
    // { id: 3, name: 'Gohan', power: 7000 },
    // { id: 4, name: 'Yamcha', power: 500 },
  ]);

  protected name = signal('');
  protected power = signal(0);

  // protected powerClasses = computed(() => {
  //   return {
  //     'text-danger': true
  //   }
  // })

  protected addCharacter(): void {
    if (!this.name() || !this.power() || this.power() <= 0) return;


    const newCharacter: Character = {
      id: Math.max(...this.characters().map(c => c.id)) + 1,
      name: this.name(),
      power: this.power()
    };
    this.characters.update(characters => [...characters, newCharacter]);
    this.resetFields();
  }

  private resetFields(): void {
    this.name.set('');
    this.power.set(0);
  }

}
