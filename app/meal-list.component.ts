import { Component, EventEmitter } from 'angular2/core';
import { DisplayMealComponent } from './meal-display.component';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriesPipe],
  directives: [DisplayMealComponent, NewMealComponent, EditMealComponent],
  template:`
  <select (change)="onChange($event.target.value)" class="filter">
    <option *ngFor="#currentMeal of mealList" value="{{currentMeal.calories}}">{{currentMeal.calories}}</option>
  </select>
  <meal-display *ngFor="#currentMeal of mealList | calories:caloriesFilter"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal"
    [meal]="currentMeal">
  </meal-display>
  <edit-meal
  *ngIf="selectedMeal"
  [meal]="selectedMeal"
  >
  </edit-meal>
  <new-meal (onSubmitNewMeal)="createMeal($event)">
  </new-meal><br>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>
  public selectedMeal: Meal;
  public caloriesFilter: number = 0;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal: Meal): void {
    this.mealList.push(
      new Meal(newMeal.name, newMeal.details, newMeal.calories, this.mealList.length)
    );
  }
  onChange(filterOption) {
    this.caloriesFilter = filterOption;
  }
}
