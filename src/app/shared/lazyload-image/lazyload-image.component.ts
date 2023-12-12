
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazyload-image',

  templateUrl: './lazyload-image.component.html',
  styleUrls: ['./lazyload-image.component.css'],

})
export class LazyloadImageComponent { 

  @Input() 
  public url:string = '';

  public hasLoader: boolean = false;

  onLoad(){
    
    this.hasLoader = true;
  }

}
