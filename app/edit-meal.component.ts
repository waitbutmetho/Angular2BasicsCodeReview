import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
  <div class="editMealDiv">
    <h3>Edit Meal:</h3>
    <input value="{{ meal.name }}" class="col-sm-8 input-lg" #newName>
    <input value="{{ meal.details}}" class="col-sm-8 input-lg" #newDetails>
    <input value="{{ meal.calories }}" class="col-sm-8 input-lg" #newCalories>
    <button (click)="editMeal(newName, newDetails, newCalories)" class="btn btn-success btn-lg add-button">Edit Meal</button>
  </div>
  `
})

export class EditMealComponent {
  public meal: Meal;
  public onSubmitEditMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitEditMeal = new EventEmitter();
  }
  editMeal(newName: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement){
    this.meal.name = newName.value;
    this.meal.details = newDetails.value;
    this.meal.calories = parseInt(newCalories.value);
  }
}
