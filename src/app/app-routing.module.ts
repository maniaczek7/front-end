import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { LoginComponent } from './login/login.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SignupComponent } from './signup/signup.component';
import { PolaroidComponent } from './polaroid/polaroid.component';
import { AuthGuardComponent } from './auth-guard/auth-guard.component';

const routes: Routes = [

    { path: '', redirectTo: 'ui/customer', pathMatch: 'full', canActivate: [AuthGuardComponent]},
    { path: 'ui/customer', component: CustomersComponent, canActivate: [AuthGuardComponent] },
    { path: 'ui/add', component: CreateCustomerComponent, canActivate: [AuthGuardComponent] },
    { path: 'ui/findbyage', component: SearchCustomersComponent, canActivate: [AuthGuardComponent]  },
    { path: 'ui/login', component: LoginComponent, canActivate: [AuthGuardComponent]  },
    { path: 'ui/invoice', component: InvoiceComponent, canActivate: [AuthGuardComponent] },
    { path: 'ui/supplier', component: SupplierComponent, canActivate: [AuthGuardComponent] },
    { path: 'ui/test', component: SignupComponent},
    { path: 'ui/polaroid', component: PolaroidComponent},

    // redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
