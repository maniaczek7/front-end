import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'search-invoice',
  templateUrl: './search-invoice.component.html',
  styleUrls: ['./search-invoice.component.css']
})
export class SearchInvoiceComponent implements OnInit {

  name: String;
  invoices: Observable<Invoice[]>

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
  }
  private searchInvoices() {
    this.invoiceService.getInvoicesByNameLike(this.name)
      .subscribe(invoices => this.invoices = invoices);
  }

  onSubmit() {
    this.searchInvoices();
  }
}
