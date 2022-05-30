import { ProductDTO } from '../dto/product.dto';

export interface ProductsContext {
  readonly all: ProductDTO[];
  readonly selectedProductId: number;
}
