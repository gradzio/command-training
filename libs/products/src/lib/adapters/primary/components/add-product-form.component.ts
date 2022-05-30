import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-add-product-form',
  templateUrl: './add-product-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductFormComponent {
  readonly productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
  });
}
