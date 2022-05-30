import { ComponentHarness, TestElement } from '@angular/cdk/testing';
import { map } from 'rxjs/operators';

export class AddProductFormComponentHarness extends ComponentHarness {
  static hostSelector = 'lib-add-product-form';

  async submitForm(inputData: Record<string, string>) {
    const formSelector = `form`;
    const inputELements = await Promise.all(
      Object.keys(inputData).map(async (key) => ({
        key,
        element: await this.locatorFor(
          `${formSelector} [formcontrolname="${key}"]`
        )(),
      }))
    );
    inputELements.forEach(
      async (element) =>
        await this.setInputValue(element.element, inputData[element.key])
    );
    await (
      await this.locatorFor(`${formSelector} input[type="submit"]`)()
    ).click();
  }

  async setInputValue(inputEl: TestElement, newValue: string) {
    await inputEl.clear();
    if (newValue) {
      await inputEl.sendKeys(newValue);
    }

    await inputEl.setInputValue(newValue);
  }
}
