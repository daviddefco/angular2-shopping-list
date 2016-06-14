import { Pipe, PipeTransform } from 'angular2/core';

import { ListItem } from './listItem'

@Pipe({
   name: 'listFilter'
})

export class FilterPipe implements PipeTransform {
   transform(list: ListItem[], args: string[]): any {
      if(list.length == 0) {
         return list
      } 

      let resultArray = []
      for (let element of list) {
         if (element.item.match('^.*' + args[0] + '.*$')) {
            resultArray.push(element)   
         }
      }
      return resultArray
   }
}