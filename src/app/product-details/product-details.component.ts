import { Component, OnInit } from '@angular/core';
import {proyecto} from '../proyecto';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  proyecto;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe( params =>{
      //2.Buscamos el producto dentro del archivo products 
      //de acuerdo al productId  
      this.proyecto = proyecto [+params.get('productId')]  
    }
    );
  }
  
  }
  