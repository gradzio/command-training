import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const SETS_PRODUCT_ID_CONTEXT =
  new InjectionToken<SetsProductIdContextPort>('SETS_PRODUCT_ID_CONTEXT');

export interface SetsProductIdContextPort {
  setState(command: SetContextWithProductIdCommand): Observable<void>;
}
