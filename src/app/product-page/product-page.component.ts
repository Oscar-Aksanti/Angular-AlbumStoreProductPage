import { Component, OnInit } from '@angular/core';
import { Album } from 'app/album';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  albumInfo: Album;
  
  constructor() { }

  ngOnInit() {
  }

}
