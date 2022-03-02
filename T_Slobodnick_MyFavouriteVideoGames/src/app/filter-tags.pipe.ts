import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filterTags'
})
export class FilterTagsPipe implements PipeTransform {

  transform(tags: string[] | undefined): string[] {
    if(tags == undefined){
      return []
    }
    return tags.filter(t => t != "");
  }

}
