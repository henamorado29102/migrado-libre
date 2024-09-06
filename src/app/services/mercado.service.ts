import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class MercadoService {

  constructor() {
    
   }

   getProducts(): Promise<Product[]> {
    return fetch('https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326#json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();  // Parse JSON response
      })
      .then(res => {  
        console.log(res.results);  // Log the results
        return res.results;        // Return the results (Product array)
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        return [];  // Return an empty array in case of error
      });
  }

  //  getProducts(): Product[] {
  //   return fetch('https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326#json')
  //     .then(response => response.json() as Promise<{results: Product[]}>) 
  //     .then(res => {         
  //       console.log(res.results);  
  //       return res.results             
  //     })
  //     .catch(error => {
  //       console.error('Error fetching products:', error);
  //     });
  // }
}
