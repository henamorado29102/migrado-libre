import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginate',
  standalone: true,
  imports: [],
  templateUrl: './paginate.component.html',
  styleUrl: './paginate.component.css',
})
export class PaginateComponent<T> {
  @Input() items: T[] = []; // The array of items (generic type)
  @Input() itemsPerPage: number = 10; // Number of items per page

  @Output() paginatedItems: EventEmitter<T[]> = new EventEmitter<T[]>(); // Emit paginated items
  @Output() currentPageChange: EventEmitter<number> =
    new EventEmitter<number>(); // Emit current page number

  currentPage: number = 1;
  totalPages: number = 1;

  constructor() {}

  ngOnChanges(): void {
    this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
    this.paginate(this.currentPage);
  }

  paginate(page: number): void {
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const pageItems = this.items.slice(startIndex, endIndex);

    this.paginatedItems.emit(pageItems); // Emit the paginated data
    this.currentPageChange.emit(this.currentPage); // Emit the current page number
  }

  // Navigate to the next page
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.paginate(this.currentPage + 1);
    }
  }

  // Navigate to the previous page
  prevPage(): void {
    if (this.currentPage > 1) {
      this.paginate(this.currentPage - 1);
    }
  }
}
