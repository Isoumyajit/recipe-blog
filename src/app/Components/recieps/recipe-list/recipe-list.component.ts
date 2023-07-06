import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Input() recipes: Recipe[];
  @Output() recipeIndexEmmiter = new EventEmitter<Recipe>();
  catch_transferRecipe(event_data: number) {
    this.recipeIndexEmmiter.emit(this.recipes[event_data]);
  }
  constructor() {}
}
