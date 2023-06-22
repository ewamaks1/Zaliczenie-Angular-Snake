import { Pipe, PipeTransform } from '@angular/core';
import { Scores } from './interfaces';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(
    value: Scores[] = [],
    sortBy: string) {
    if (sortBy === 'descending') {
      return value.sort((a,b) => b.score - a.score)
    } else if(sortBy === 'ascending') {
      return value.sort((a,b) => a.score - b.score)
    } else {
      return value;
    }
  }
}
