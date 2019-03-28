import { Component, AfterContentChecked } from '@angular/core';
import { FoodService } from './food.service';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Food, FoodCategory } from '../Common/models';
import { ImagesService } from '../Images/images.service';

@Component({
  selector: 'food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})

export class FoodComponent {
  foods: Food[];
  foodCategory = FoodCategory;

  constructor(
    private foodService: FoodService,
    private imageService: ImagesService
  ) { }

  ngOnInit() {
    this.foodService.getFoods()
      .subscribe((result: any) => {
        this.foods = new Array<Food>(result.length);

        for (var i = 0; i < result.length; i++) {
          this.foods[i] = JSON.parse(result[i]);
        }

        this.loadImages();
      });
  }

  loadImages() {
    this.foods.forEach((item) => {
      if (item && item.imageName)
        this.imageService.loadImage(item.imageName).subscribe((data) => {
          let x = data;
        });
    })
  }
}
