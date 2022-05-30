import { ProductDTO } from './product.dto';

export const makeProductDtoStub = (name: string): ProductDTO => ({
  id: Math.ceil(Math.random() * 10000),
  name,
  price: Math.ceil(Math.random() * 100),
});
