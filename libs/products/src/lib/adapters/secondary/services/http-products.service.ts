import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllProductDtoPort } from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import { AddsProductDtoPort } from '../../../application/ports/secondary/dto/adds-product.dto-port';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';
import { makeProductDtoStub } from '../../../application/ports/secondary/dto/product.dto.stub';
import { CreateProductCommand } from '../../../application/ports/primary/command/create-product.command';

@Injectable()
export class InMemoryProductsService
  implements GetsAllProductDtoPort, AddsProductDtoPort
{
  getAll(): Observable<ProductDTO[]> {
    return of([
      makeProductDtoStub('Product 1'),
      makeProductDtoStub('Product 2'),
    ]);
  }

  add(command: CreateProductCommand): Observable<void> {
    return of();
  }
}
