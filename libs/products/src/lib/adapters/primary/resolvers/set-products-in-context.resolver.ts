import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {
  GetsAllProductDtoPort,
  GETS_ALL_PRODUCT_DTO,
} from '../../../application/ports/secondary/dto/gets-all-product.dto-port';

@Injectable()
export class SetProductsInContextResolver implements Resolve<void> {
  constructor(
    @Inject(GETS_ALL_PRODUCT_DTO)
    private _getsAllProductDto: GetsAllProductDtoPort
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<void> {
    return of();
  }
}
