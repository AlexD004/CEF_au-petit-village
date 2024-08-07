import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  products: any[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.products
  }
}
