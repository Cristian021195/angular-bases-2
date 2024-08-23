import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  product:string = "Defecto";
  color:string = "bg-success";
  constructor(private _route:ActivatedRoute){}
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      this.product = params['id'];
      this.color = params['cat'];
    })
  }
}
