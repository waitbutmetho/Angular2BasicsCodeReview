import { Pipe, PipeTransform } from 'angular2/core';
import { Meal                } from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})
export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredCaloriesState  =  parseInt(args[0]);
    if(desiredCaloriesState > 300) {
      return input.filter((meal) => {
        return meal.calories > 300;
      });
    } else if(desiredCaloriesState < 300 && desiredCaloriesState > 0) {
      return input.filter((meal) => {
        return meal.calories < 300;
      })
    } else {
      return input;
    }

  }
}
