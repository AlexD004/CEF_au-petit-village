import { Component,  OnInit, inject, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  slug: any;
  products: any[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {

    this.products = this.productsService.products;
    
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
    });

    this.products = this.products.find( product => product.slug === this.slug );
    this.slug = this.products;
  } 
}
