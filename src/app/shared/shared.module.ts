import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadImageComponent } from './lazyload-image/lazyload-image.component';



@NgModule({
  declarations: [
    LazyloadImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    LazyloadImageComponent
  ]
})
export class SharedModule { }
