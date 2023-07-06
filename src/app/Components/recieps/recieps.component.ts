import { Component, Input, Output } from '@angular/core';
import { Recipe } from './model/recipe.model';
@Component({
  selector: 'app-recieps',
  templateUrl: './recieps.component.html',
  styleUrls: ['./recieps.component.css'],
})
export class ReciepsComponent {
  recipes: Recipe[] = [];
  recipe: Recipe;
  @Output() recipe_out = Recipe;
  @Input() recipe_in = Recipe;
  constructor() {
    this.recipes.push(
      new Recipe('A test Recipe', 'A test data', '../../../assets/food-1.jpeg')
    );
    this.recipes.push(
      new Recipe(
        'A test Recipe 2 ',
        'A test data 2 ',
        '../../../assets/food-1.jpeg'
      )
    );
  }

  catchRecipe(recipe: Recipe) {
    this.recipe = recipe;
  }
}
