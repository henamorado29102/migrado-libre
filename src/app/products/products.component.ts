import { ChangeDetectorRef, Component } from '@angular/core';
import { MarketService } from '../services/market.service';
import { Product } from '../models/product';
import { ProductComponent } from '../product/product.component';
import { PaginateComponent } from '../paginate/paginate.component';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent, PaginateComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = []
  paginatedProducts: Product[] = [];


  constructor(public marketService: MarketService, private cdr: ChangeDetectorRef){
  
  }

  ngOnInit() {
    this.marketService.getProducts().then(products => {
      this.products = products;
      this.cdr.detectChanges();
    });
  }

  onPaginatedProducts(paginated: Product[]): void {
    console.log(paginated)
    this.paginatedProducts = paginated;
  }

}
