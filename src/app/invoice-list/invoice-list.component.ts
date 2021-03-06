import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { InvoiceService } from '../invoice.service';
import { Invoice } from '../invoice';
import { CreateInvoiceComponent } from '../create-invoice/create-invoice.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

invoices: Observable<Invoice[]>;

constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteInvoices() {
    this.invoiceService.deleteAll()
      .subscribe(
        data => {
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

  reloadData() {
    this.invoices = this.invoiceService.getInvoicesList();
  }
}
