import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Food, FoodCategory } from '../Common/models';

@Injectable()
export class FoodService {
  constructor(private http: HttpClient) { }

  getFoods() {
    return this.http.get('Food/GetFoods', { responseType: 'json' });
  }

  getDetails(foodID: any) {
    return this.http.get('/Food/Details/' + foodID, { responseType: 'json' });
  }

  deleteFood(idValue: number): Observable<{}> {
    return this.http.delete('/Food/DeleteFood/' + idValue);
  }

  addFood(food: Food): Observable<Food> {
    return this.http.post<Food>('/Food/Create', food);
  }

  editFood(food: Food): Observable<Food> {
    return this.http.post<Food>('/Food/Edit', food);
  }

  getCategories() {
    return Object.keys(FoodCategory).filter((type) => isNaN(<any>type) && type !== 'values');
  }
}
