import { Component, AfterContentChecked } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Food, FoodCategory } from '../../Common/models';

import { FoodService } from '../food.service';
import { ValidationService } from '../../Common/validation.service';

@Component({
  selector: 'food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss'],
})

export class FoodEditComponent implements AfterContentChecked {
  registerForm: FormGroup;
  food: Food = <Food>{};
  foodCategories: Array<string>;
  foodCategory = FoodCategory;
  isSubmited: boolean = false;
  keys = Object.keys;

  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute,
    private _location: Location,
    private validationService: ValidationService) { }

  ngOnInit() {
    let foodID = this.route.snapshot.paramMap.get('id');
    this.foodCategories = this.foodService.getCategories();

    this.foodService.getDetails(foodID)
      .subscribe((result: string) => {
        this.food = JSON.parse(result);
      });
  }

  ngAfterContentChecked() {
    this.registerForm = new FormGroup({
      category: new FormControl(this.food.category),
      name: new FormControl(this.food.name, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ]),
      ingredients: new FormControl(this.food.ingredients, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]),
      quantity: new FormControl(this.food.quantity, [
        Validators.required,
        Validators.pattern(/^\d+(\.\d{1,2})?$/),
        Validators.min(1),
        Validators.max(10000)
      ]),
      price: new FormControl(this.food.price, [
        Validators.required,
        Validators.pattern(/^\d+(\.\d{1,2})?$/),
        Validators.min(0.25),
        Validators.max(5000)
      ])
    });
  }

  get form() {
    return this.registerForm.controls;
  }

  back() {
    this._location.back();
  }

  edit() {
    this.isSubmited = true;
    if (!this.registerForm.invalid) {
      this.foodService.editFood(this.food).subscribe(() => { this.back(); });
    }
  }

  errorMessage(control: FormControl) {
    return this.validationService.getErrorMessage(control);
  }

  hasError(control: FormControl) {
    return this.validationService.hasError(control, this.isSubmited);
  }
}
