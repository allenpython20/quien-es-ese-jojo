import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './pages/characters.component';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterImagePipe } from './pipes/character-image.pipe';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { SharedModule } from '../shared/shared.module';
import { CharacterImageComponent } from './components/character-image/character-image.component';




@NgModule({
  declarations: [
    CharactersComponent,
    CharacterImagePipe,
    CharacterImageComponent,
    ListCharactersComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule
  ]
})
export class CharactersModule { }
