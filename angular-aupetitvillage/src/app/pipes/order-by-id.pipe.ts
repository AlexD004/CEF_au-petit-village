import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByID'
})
export class OrderByIDPipe implements PipeTransform {

  transform( products: any[]): any[] {

    return products.sort( (a:any, b:any) => {
      if(a.num < b.num) { return -1; }
      else if(a.num > b.num) { return 1; }
      else return 0;
    })

  }

}
