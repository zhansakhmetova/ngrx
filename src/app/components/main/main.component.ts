import {Component, OnInit} from '@angular/core';
import {tap} from 'rxjs/operators';
import {cartLoaded, cartLoading, productDetails} from '../../../core/cart.actions';
import {AppState, Cart, Details} from '../../../core/model';
import {GeneralService} from '../../../core/general.service';
import {select, Store} from '@ngrx/store';
import {checkId} from '../../../core/main.selectors';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DataModalComponent} from '../data-modal/data-modal.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  loading: boolean;
  cartData$: Cart[];
  productData: Details;
  detailId;
  detailsSaved;

  constructor(private general: GeneralService,
              private store: Store<AppState>,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.general.getCart()
      .pipe(
        tap(() => {
          this.store.dispatch(cartLoading());
        })
      )
      .subscribe((res) => {
        this.cartData$ = res;
        this.loading = false;
      });
  }


  openModal(id) {
    this.detailsSaved = localStorage.getItem('details');
    const modalRef = this.modalService.open(DataModalComponent);

    let checkProductId;
    this.detailId = this.store.select(checkId);

    this.detailId.subscribe(res => {
      checkProductId = res;
    });

    if (checkProductId?.id !== id) {
      this.general.getProducts(id)
        .subscribe(details => {
          this.productData = details;
          modalRef.componentInstance.data = this.productData;
          modalRef.componentInstance.loading = false;
          this.store.dispatch(productDetails({details}));
        });
    } else {
      modalRef.componentInstance.data = JSON.parse(this.detailsSaved);
    }
  }
}
