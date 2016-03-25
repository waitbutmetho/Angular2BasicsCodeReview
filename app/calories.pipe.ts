import { Pipe, PipeTransform } from 'angular2/core';
import { Meal                } from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})
export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredCaloriesState = args[0];
    if(desiredCaloriesState === 0) {
      return input;
    } else {
      return input.filter((meal) => {
        return (meal.calories === args[0]);
      });
    }
  }
}
