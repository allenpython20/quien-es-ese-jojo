import { Component, Renderer2,OnInit, ViewEncapsulation } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { Character } from '../interfaces/characters.interface';

import { alertLose, alertReset, alertWin } from '../utils/function-sweetalert';
import { seleccionarElementosAlAzar } from '../utils/functions-character';
import { timer } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CharactersComponent implements OnInit{
 
  public characters : Character[] = [];
  public charactersOriginal : Character[] = [];
  public indexCharacterRandom:number = 0;
  public adivina = false;
  public points = 0;
  public lives = 3;
  public falla = false;
  constructor(
    private charactersService: CharactersService,
    private renderer: Renderer2
  ){ }

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'color-body');
    this.charactersService.getCharacters().subscribe( characters => {
    this.charactersOriginal = characters;
    this.reset(true,true);
    
   })

    //this.getCharacters();

  }

  
  async selectCharacter(index:number){
   
    if(index !== this.indexCharacterRandom) {
      this.lives--;
      
      this.falla = true;
      setTimeout(() => {
          this.falla = false;
      },500);
  
      if(this.lives <=0 ){

        await alertLose();

        
        this.reset(false,true);
      }
      //this.falla = false;
      return;
    }

    this.adivina = true;
    this.points++;
    await timer(500).toPromise();
    //await alertWin();
    
    this.reset();
    
  }

  getCharacters(){
    this.characters = [];
    this.charactersService.getCharacters().subscribe( characters => {
      this.characters = seleccionarElementosAlAzar(characters,4);
      this.indexCharacterRandom = Math.floor(Math.random() * 4);
      this.adivina = false;

     })
  }

  async reset(showGif:boolean=false,resetResults:boolean=false){
    // this.getCharacters();
    // this.indexCharacterRandom = -1;

    if(resetResults){
      this.lives = 3;
      this.points = 0;
    }
    
    this.characters = [];
    this.characters = seleccionarElementosAlAzar(this.charactersOriginal,4);
    this.indexCharacterRandom = Math.floor(Math.random() * 4);
    this.adivina = false;
    

   
    if(showGif){
      await alertReset();  
    }
   
  }


}
