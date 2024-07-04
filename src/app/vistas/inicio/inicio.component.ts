import { Component } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent {

  validateForm: FormGroup<{
    name: FormControl<string>;
    address: FormControl<string>;
    productType: FormControl<string>;
    email: FormControl<string>;
    garantia: FormControl<string>;
    time: FormControl<string>;
    marca: FormControl<string>;
    number:FormControl<string>;
    danio: FormControl<string>;
  }>;

  submitForm(): void {
    console.log('submit', this.validateForm.value);
    this.validateForm.reset();
  }


  constructor(private fb: NonNullableFormBuilder) {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      productType: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      garantia: ['', Validators.required],
      time: ['', [Validators.required]],
      marca: ['', Validators.required],
      number: ['', [Validators.required]],
      danio: ['', [Validators.required]]
    });
  }

}
