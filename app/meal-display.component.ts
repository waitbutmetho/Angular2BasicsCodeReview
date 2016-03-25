import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <div>
    <span>Name: {{meal.name}}</span>
    <span class="myHide">Details: {{meal.details}}</span>
    <span class="myHide">Calories: {{meal.calories}}</span>
  </div>
  `
})

export class DisplayMealComponent {
  public meal: Meal;
}
