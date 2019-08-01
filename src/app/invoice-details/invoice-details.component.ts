import { Component, OnInit, Input } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { Invoice } from '../invoice';
import { MatSnackBar } from '@angular/material';

import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { InvoiceListComponent } from '../invoice-list/invoice-list.component';
import { SearchInvoiceComponent } from '../search-invoice/search-invoice.component';

@Component({
  selector: 'invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailsComponent implements OnInit {

@Input() invoice: Invoice;

reason: String = null;

constructor(private invoiceService: InvoiceService,
            private listComponent: InvoiceListComponent,
            private snackBar: MatSnackBar/*,
            private searchComponent: SearchInvoiceComponent*/) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.invoiceService.updateInvoice(this.invoice.id,
      { name: this.invoice.name})
      .subscribe(
        data => {
          console.log(data);
          this.invoice = data as Invoice;
        },
        error => console.log(error));
  }

  deleteInvoice() {
    this.invoiceService.deleteInvoice(this.invoice.id)
      .subscribe(
        data => {
            console.log('test123');
            this.listComponent.reloadData();
        },
        error => {
          console.log(error.status);
          if (error.status == 226){
            this.reason = error.error.text;
            console.log(this.reason);
            this.openSnackBar(this.reason);
          }
          console.log(error);
        });
    this.listComponent.reloadData();
  }

  openSnackBar(wiadomosc) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      data : wiadomosc,
      duration : 2000
    });
  }
}
