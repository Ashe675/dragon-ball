
import { Component, inject } from '@angular/core';
import { DragonballCharacterList } from "../../components/dragonball/character-list/character-list";
import { DragonballCharacterAdd } from "../../components/dragonball/character-add/character-add";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  imports: [DragonballCharacterList, DragonballCharacterAdd],
  templateUrl: './dragonball-super-page.html',
})
export class DragonballSuperPage {

  protected dragonballService = inject(DragonballService);

}
