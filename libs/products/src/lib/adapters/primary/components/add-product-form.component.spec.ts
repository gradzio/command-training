import { TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { AddProductFormComponentModule } from './add-product-form.component-module';
import { ADDS_PRODUCT_DTO } from '../../../application/ports/secondary/dto/adds-product.dto-port';
import { AddProductFormComponentHarness } from './add-product-form.component-harness';

describe('AddProductFormComponent', () => {
  const given = async (data: Partial<{}>) => {
    TestBed.configureTestingModule({
      imports: [AddProductFormComponentModule],
      declarations: [TestPage],
      providers: [
        {
          provide: ADDS_PRODUCT_DTO,
          useValue: {
            add: () => of(void 0),
          },
        },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(TestPage);
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const componentHarness = await loader.getHarness(
      AddProductFormComponentHarness
    );

    return {
      addsProductDtoPortAddSpy: jest.spyOn(
        TestBed.inject(ADDS_PRODUCT_DTO),
        'add'
      ),
      submitForm: (formData: Record<string, string>) =>
        componentHarness.submitForm(formData),
    };
  };
  [
    {
      givenData: {},
      whenData: { formData: { name: 'Some product', price: '10' } },
      thenData: { spyData: new CreateProductCommand('Some product', 10) },
    },
  ].forEach(({ givenData, whenData, thenData }, i) =>
    it(`should submit the form #${i + 1}`, async () => {
      const { submitForm, addsProductDtoPortAddSpy } = await given(givenData);

      await submitForm(whenData.formData);

      expect(addsProductDtoPortAddSpy).toHaveBeenCalledWith(thenData.spyData);
    })
  );
});
@Component({
  template: '<lib-add-product-form></lib-add-product-form>',
})
class TestPage {}
