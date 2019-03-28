import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Food, FoodCategory } from '../../Common/models';

import { FoodService } from '../food.service';
import { ValidationService } from '../../Common/validation.service';
import { ImagesService } from '../../Images/images.service';

@Component({
  selector: 'food-create',
  templateUrl: './food-create.component.html',
  styleUrls: ['./food-create.component.scss'],
})

export class FoodCreateComponent {
  registerForm: FormGroup;
  newFood: Food = <Food>{};
  foodCategories: Array<string>;
  foodCategory = FoodCategory[FoodCategory.Starter];
  isSubmited: boolean = false;
  imageFile: File = null;

  constructor(
    private location: Location,
    private foodService: FoodService,
    private validationService: ValidationService,
    private imageService: ImagesService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      category: new FormControl(this.newFood.category),
      name: new FormControl(this.newFood.name, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ]),
      ingredients: new FormControl(this.newFood.ingredients, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]),
      quantity: new FormControl(this.newFood.quantity, [
        Validators.required,
        Validators.pattern(/^\d+(\.\d{1,2})?$/),
        Validators.min(1),
        Validators.max(10000)
      ]),
      price: new FormControl(this.newFood.price, [
        Validators.required,
        Validators.pattern(/^\d+(\.\d{1,2})?$/),
        Validators.min(0.25),
        Validators.max(5000)
      ])
    });

    this.foodCategories = this.foodService.getCategories();
  }

  get form() { return this.registerForm.controls; }

  onFileSelected(event) {
    this.imageFile = <File>event.target.files[0];
  }

  back() {
    this.location.back();
  }

  add() {
    this.isSubmited = true;

    if (!this.registerForm.invalid) {
      var file = new FormData();
      file.append('image', this.imageFile, this.imageFile.name);

      this.imageService.saveImage(file).subscribe();

      this.newFood.category = FoodCategory[this.foodCategory];
      this.newFood.imageName = this.imageFile.name;
      this.foodService.addFood(this.newFood).subscribe(() => { this.back(); });
    }
  }

  errorMessage(control: FormControl) {
    return this.validationService.getErrorMessage(control);
  }

  hasError(control: FormControl) {
    return this.validationService.hasError(control, this.isSubmited);
  }
}
