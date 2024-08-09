import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(products: any[], searchText: string): any[] {

    if (products && searchText) {
      return products.filter(el => {
        return el.name.toLowerCase().includes(searchText.toLowerCase());
      })
    } else {
      return products
    }
    
  }

}
