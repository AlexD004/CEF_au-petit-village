import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html', 
  styleUrl: './card.component.css'
})
export class CardComponent {

  order: number = 1;
  isOrder: boolean = false;
  isUnorder: boolean = false;

  products: any[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.products
  }

  sortOrderPrices(){
    this.order = 1
    this.isUnorder = false
    this.isOrder = !this.isOrder
  }
  sortUnorderPrices(){
    this.order = -1
    this.isOrder = false
    this.isUnorder = !this.isUnorder
  }
}
