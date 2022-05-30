import { NgModule } from '@angular/core';
import { InMemoryProductsService } from './http-products.service';
import { GETS_ALL_PRODUCT_DTO } from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import { ADDS_PRODUCT_DTO } from '../../../application/ports/secondary/dto/adds-product.dto-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    InMemoryProductsService,
    { provide: GETS_ALL_PRODUCT_DTO, useExisting: InMemoryProductsService },
    { provide: ADDS_PRODUCT_DTO, useExisting: InMemoryProductsService },
  ],
  exports: [],
})
export class HttpProductsServiceModule {}
