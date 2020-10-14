import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokeFormat'
})
export class PokeFormatPipe implements PipeTransform {

  transform(value: string, ...args: string[]): any {
    let newVal = '';
    if (value) {
        newVal = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
        return '';
    }

    newVal = newVal.replace('-', ' ');
    return newVal;
  }

}
