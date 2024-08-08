import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortOrderPrices'
})
export class SortOrderPricesPipe implements PipeTransform {

  transform( products: any[], order: number): any[] {

    return products.sort( (a:any, b:any) => {

      if(order == 0) {

        if(a.id < b.id) { return -1; }
        else if(a.id > b.id) { return 1; }
        else return 0;

      } else {

        if(a.price < b.price) { return -1 *order; }
        else if(a.price > b.price) { return 1 *order; }
        else return 0;

      }

    })

  }

}
