import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginate', 
  templateUrl: './paginate.component.html',
  standalone: true,
  imports: [],
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnChanges {
  @Input() totalItems: number = 0; 
  @Input() itemsPerPage = 10; 
  @Output() paginatedItems = new EventEmitter<any[]>();  

  currentPage = 1;
  totalPages = 1;

  ngOnChanges(): void {   
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      this.updatePage();  
  }

  updatePage(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    this.paginatedItems.emit([start, end]);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePage();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePage();
    }
  }
}
