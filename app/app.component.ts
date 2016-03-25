import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent         } from './meal-list.component';
import { Meal                      } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [ MealListComponent ],
  template: `
  <div class="container">
  <h1>Meal and Calorie Tracker</h1>
    <div class="meal">
      <meal-list [mealList]="meals" (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];

  constructor(){
    this.meals = [
      new Meal("Big Mac", 'Ate the whole thing', 563, 0),
      new Meal("Large French Fries", 'Ate all of them', 498, 1),
      new Meal("Oreo McFlurry", 'It was delicious', 560, 2),
      new Meal("McDouble", 'Only ate half', 195, 3)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('Parent', clickedMeal);
  }
}
