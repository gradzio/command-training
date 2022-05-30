import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const ADDS_PRODUCT_DTO = new InjectionToken<AddsProductDtoPort>(
  'ADDS_PRODUCT_DTO'
);

export interface AddsProductDtoPort {
  add(command: CreateProductCommand): Observable<void>;
}
