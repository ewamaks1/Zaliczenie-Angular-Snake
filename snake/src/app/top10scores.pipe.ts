import { Pipe, PipeTransform } from '@angular/core';
import { Scores } from './interfaces';

@Pipe({
  name: 'top10scores'
})
export class Top10scores implements PipeTransform {
  transform(
      value: Scores[] = [], 
      scoresToDisplay: number) {
        return [...value]
        .sort((a, b) => b.score - a.score)
        .slice(0, scoresToDisplay);
    }
  }

