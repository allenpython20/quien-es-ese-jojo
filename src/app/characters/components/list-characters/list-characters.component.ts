
import {  Component,  EventEmitter,  Input,  OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'characters-list',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListCharactersComponent implements OnInit {

  ngOnInit(): void { }

  @Input() characters:Character[] = [];
  @Input() adivina:boolean = false;

  @Output() eventSelectCharacter = new EventEmitter<number>();

  selectCharacter(i:number){
    this.eventSelectCharacter.emit(i);
  }

}
