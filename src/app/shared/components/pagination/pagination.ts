import { Component, input, computed, signal, linkedSignal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagination',
  imports: [RouterLink],
  templateUrl: './pagination.html',
})
export class Pagination {
  currentPage = input<number>(1);
  totalPages = input<number>(0);
  activePage = linkedSignal(this.currentPage);

  getPagesList = computed(() => {
    return Array.from({length: this.totalPages()}, (_, i) => i + 1)
  });
}
