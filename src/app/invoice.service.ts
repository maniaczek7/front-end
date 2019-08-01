import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private baseUrl = 'http://rmichniewski.eu/api/invoices';

  constructor(private http: HttpClient) { }

  getInvoices(): Observable<Object> {
    return this.http.get(`${this.baseUrl}`);
  }

  createInvoice(invoice: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, invoice);
  }

  updateInvoice(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteInvoice(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {observe: 'response'});
  }

  getInvoicesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

//  getInvoicesByAge(age: number): Observable<any> {
//    return this.http.get(`${this.baseUrl}/age/${age}`);
//  }

  getInvoicesByNameLike(nameLike: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/name/${nameLike}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
