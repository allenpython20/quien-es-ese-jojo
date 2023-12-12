import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'characterImage'
})

export class CharacterImagePipe implements PipeTransform {
    transform(url:string): any {
        return `https://jojos-bizarre-api.netlify.app/assets/${url}`
    }
}