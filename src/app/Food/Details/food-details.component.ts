import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../food.service';
import { Location } from '@angular/common';
import { Food, FoodCategory} from '../../Common/models';

@Component({
  selector: 'food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss'],
})

export class FoodDetailsComponent {
  food: Food;
  foodCategory = FoodCategory;

  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit() {
    let foodID = this.route.snapshot.paramMap.get('id');

    this.foodService.getDetails(foodID)
      .subscribe((result: string) => {
        this.food = JSON.parse(result);
      });
  }

  back() {
    this._location.back();
  }
}
