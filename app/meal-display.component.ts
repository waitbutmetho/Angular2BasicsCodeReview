import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <div>
    <span>{{meal.name}}</span>
    <span class="hide">Details: {{meal.details}}</span>
    <span class="hide">Calories: {{meal.calories}}</span>
  </div>
  `
})

export class DisplayMealComponent {
  public meal: Meal;
}
