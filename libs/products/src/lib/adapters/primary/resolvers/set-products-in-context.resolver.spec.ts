import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { SETS_ALL_PRODUCTS_CONTEXT } from '../../../application/ports/secondary/context/sets-all-products.context-port';
import { GETS_ALL_PRODUCT_DTO } from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';
import { makeProductDtoStub } from '../../../application/ports/secondary/dto/product.dto.stub';
import { SetProductsInContextResolver } from './set-products-in-context.resolver';
import { SetProductsInContextResolverModule } from './set-products-in-context.resolver-module';

describe('SetProductsInContextResolver', () => {
  const given = async (
    data: Partial<{ getsAllProductDtoStub: ProductDTO[] }>
  ) => {
    TestBed.configureTestingModule({
      imports: [SetProductsInContextResolverModule],
      declarations: [],
      providers: [
        {
          provide: SETS_ALL_PRODUCTS_CONTEXT,
          useValue: {
            setState: () => of(void 0),
          },
        },
        {
          provide: GETS_ALL_PRODUCT_DTO,
          useValue: {
            getAll: () => of(data.getsAllProductDtoStub),
          },
        },
      ],
    });

    const resolver = TestBed.inject(SetProductsInContextResolver);

    return {
      setsStateProductsContext: jest.spyOn(
        TestBed.inject(SETS_ALL_PRODUCTS_CONTEXT),
        'setState'
      ),
      resolve: async () =>
        resolver
          .resolve(new ActivatedRouteSnapshot(), {
            url: '',
          } as RouterStateSnapshot)
          .toPromise(),
    };
  };

  [
    {
      givenData: { getsAllProductDtoStub: [] },
    },
    {
      givenData: {
        getsAllProductDtoStub: [
          makeProductDtoStub('Product 1'),
          makeProductDtoStub('Product 2'),
        ],
      },
    },
  ].forEach(({ givenData }, i) =>
    it(`should submit the form #${i + 1}`, async () => {
      const { resolve, setsStateProductsContext } = await given(givenData);

      await resolve();

      expect(setsStateProductsContext).toHaveBeenCalledWith(
        new SetContextWithAllProductsCommand(givenData.getsAllProductDtoStub)
      );
    })
  );
});
