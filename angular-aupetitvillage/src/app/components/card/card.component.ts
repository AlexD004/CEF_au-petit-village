import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html', 
  styleUrl: './card.component.css'
})
export class CardComponent {

  order: number = 0;
  isOrder: boolean = false;
  isUnorder: boolean = false;

  searchText: string = "";

  products: any[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.products
  }

  sortOrderPrices(){

    if(this.order==1){
      this.order=0
      this.isOrder=false
    }else{
      this.order=1
      this.isOrder=true
      this.isUnorder=false
    }
  }
  sortUnorderPrices(){
    if(this.order==-1){
      this.order=0
      this.isUnorder=false
    }else{
      this.order=-1
      this.isOrder=false
      this.isUnorder=true
    }
  }
}
