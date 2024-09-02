import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products/products.mock';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  product?:Product;
  loading = true;
  products = products;
  color = "";
  constructor(private _route:ActivatedRoute){}
  ngOnInit(): void {
    setTimeout(() => {
      this._route.params.subscribe(params=>{
        this.product = this.products.find(p=>p.id == params['id']);
        this.color = this.product?.price as number > 5 ? "red" : "";
      })
      this.loading = false;
    }, 1500);
  }
}
