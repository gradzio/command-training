import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const SETS_ALL_PRODUCTS_CONTEXT =
  new InjectionToken<SetsAllProductsContextPort>('SETS_ALL_PRODUCTS_CONTEXT');

export interface SetsAllProductsContextPort {
  setState(command: SetContextWithAllProductsCommand): Observable<void>;
}
