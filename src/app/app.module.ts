import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthGuardComponent } from './auth-guard/auth-guard.component';
import { JwtInterceptor } from './jwt.interceptor/jwt.interceptor.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InvoiceComponent } from './invoice/invoice.component';
import { CustomersComponent } from './customers/customers.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { SearchInvoiceComponent } from './search-invoice/search-invoice.component';
import { SupplierComponent } from './supplier/supplier.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { PolaroidComponent } from './polaroid/polaroid.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    SearchCustomersComponent,
    LoginComponent,
    AuthGuardComponent,
    InvoiceComponent,
    CustomersComponent,
    CreateInvoiceComponent,
    InvoiceDetailsComponent,
    InvoiceListComponent,
    SearchInvoiceComponent,
    SupplierComponent,
    MenuComponent,
    SignupComponent,
    SnackBarComponent,
    PolaroidComponent
  ],
  entryComponents: [
    SnackBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTabsModule,
    MatSelectModule,
    MatMenuModule,
    MatSnackBarModule
  ],
//  exports: [JwtInterceptor],
  providers: [CustomersListComponent,SearchCustomersComponent, LoginComponent,
              InvoiceListComponent,SearchInvoiceComponent,SignupComponent, SnackBarComponent,
{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
