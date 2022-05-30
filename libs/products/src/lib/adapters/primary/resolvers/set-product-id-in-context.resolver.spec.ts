import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  Params,
  RouterStateSnapshot,
} from '@angular/router';
import { of } from 'rxjs';
import { SETS_PRODUCT_ID_CONTEXT } from '../../../application/ports/secondary/context/sets-product-id.context-port';
import { SetProductIdInContextResolver } from './set-product-id-in-context.resolver';
import { SetProductIdInContextResolverModule } from './set-product-id-in-context.resolver-module';

describe('SetProductIdInContextResolver', () => {
  const given = async (
    data: Partial<{ activatedRouteSnapshotParamsStub: Params }>
  ) => {
    TestBed.configureTestingModule({
      imports: [SetProductIdInContextResolverModule],
      declarations: [],
      providers: [
        {
          provide: SETS_PRODUCT_ID_CONTEXT,
          useValue: {
            setState: () => of(void 0),
          },
        },
        {
          provide: ActivatedRouteSnapshot,
          useValue: {
            params: data.activatedRouteSnapshotParamsStub,
          },
        },
      ],
    });

    const resolver = TestBed.inject(SetProductIdInContextResolver);

    return {
      setsStateProductsContext: jest.spyOn(
        TestBed.inject(SETS_PRODUCT_ID_CONTEXT),
        'setState'
      ),
      resolve: async () =>
        resolver
          .resolve(TestBed.inject(ActivatedRouteSnapshot), {
            url: '',
          } as RouterStateSnapshot)
          .toPromise(),
    };
  };

  [
    {
      givenData: { activatedRouteSnapshotParamsStub: { productId: 1 } },
    },
  ].forEach(({ givenData }, i) =>
    it(`should submit the form #${i + 1}`, async () => {
      const { resolve, setsStateProductsContext } = await given(givenData);

      await resolve();

      expect(setsStateProductsContext).toHaveBeenCalledWith(
        new SetContextWithProductIdCommand(
          givenData.activatedRouteSnapshotParamsStub.productId
        )
      );
    })
  );
});
