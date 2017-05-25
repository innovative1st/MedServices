import { Component, OnInit } from '@angular/core';
import {PackagePrice} from './price.model';
//import {All} from 'w';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  packages: PackagePrice [] ;
  package1: PackagePrice;
  package2: PackagePrice;
  constructor() {
    this.packages = [
      new PackagePrice('Trial',0,['Free usage for a 10 days','All features available','no support on call']),
    new PackagePrice('Monthly',500,['All features available','On call support','10 days extension for payment']),
     new PackagePrice('Yearly',4000,['All features available','on call support on call','one month extension for payment'])
    ]    

  
   }

  ngOnInit() {
  }

}
