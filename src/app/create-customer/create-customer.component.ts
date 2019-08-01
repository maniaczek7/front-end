import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';
import { Invoice } from '../invoice';
import { CustomerService } from '../customer.service';
import { InvoiceService } from '../invoice.service';
import { Observable } from 'rxjs';
import { CustomersListComponent } from '../customers-list/customers-list.component';

@Component({
  selector: 'create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  invoice: Invoice = new Invoice();
  invoices: Observable<Invoice[]>;
  submitted = false;

  constructor(private listComponent: CustomersListComponent, private customerService: CustomerService, private invoiceService: InvoiceService) { }

  ngOnInit() {
    console.log('fetching invoices');
    this.invoices = this.invoiceService.getInvoicesList();
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
    this.invoice = new Invoice();
  }

  save() {
    this.customer.invoice = this.invoice;
    this.customerService.createCustomer(this.customer)
      .subscribe(data => console.log(data), error => console.log(error));

    this.customer = new Customer();
    this.invoice = new Invoice();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.listComponent.reloadData();
  }
}
