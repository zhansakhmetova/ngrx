import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cart, Product} from './model';

@Injectable({
  providedIn: 'root'
})

export class GeneralService {
  constructor(private http: HttpClient) {
  }

  getCart() {
    return this.http.get<Cart[]>(`https://fakestoreapi.com/carts/`)
      .pipe();
  }


  getProducts(id: number) {
    return this.http.get<any>(`https://fakestoreapi.com/products/${id}`);
  }

}
