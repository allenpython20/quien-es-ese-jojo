
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'character-image',
  templateUrl: './character-image.component.html',
  styleUrls: ['./character-image.component.css'],
 
})
export class CharacterImageComponent {

  @Input() adivina!:boolean;
  @Input() character!:Character;

}
