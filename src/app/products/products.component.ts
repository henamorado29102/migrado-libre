import { ChangeDetectorRef, Component } from '@angular/core';
import { MercadoService } from '../services/mercado.service';
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


  constructor(public mercadoService: MercadoService, private cdr: ChangeDetectorRef){
  
  }

  ngOnInit() {
    this.mercadoService.getProducts().then(products => {
      this.products = products;
      //this.cdr.detectChanges();
    });
  }

  onPaginatedProducts(paginated: Product[]): void {
    console.log(paginated)
    this.paginatedProducts = paginated;
  }

}
