import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor() {
    
   }

   getProducts(): Promise<Product[]> {
    return fetch('https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326#json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();  
      })
      .then(res => {  
        return res.results;       
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        return [];  
      });
  }
}
