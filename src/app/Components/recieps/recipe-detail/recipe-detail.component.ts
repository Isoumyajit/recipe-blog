import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() recipeItem: Recipe;
  @Output() updatedRecipeEmitter = new EventEmitter<Recipe>();
  showEditModal: boolean = false;
  constructor() {}
  handleEdit(flag: boolean) {
    this.showEditModal = flag;
  }

  catchUpdatedRecipe(recipe: Recipe) {
    this.recipeItem = recipe;
    this.updatedRecipeEmitter.emit(recipe);
  }
}
