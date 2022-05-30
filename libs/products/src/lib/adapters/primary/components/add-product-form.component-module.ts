import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductFormComponent } from './add-product-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [AddProductFormComponent],
  providers: [],
  exports: [AddProductFormComponent],
})
export class AddProductFormComponentModule {}
