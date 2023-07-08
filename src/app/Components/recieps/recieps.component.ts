import { Component, Input, Output } from '@angular/core';
import { Recipe } from './model/recipe.model';
import { RecipeService } from 'src/Services/recipe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recieps',
  templateUrl: './recieps.component.html',
  styleUrls: ['./recieps.component.css'],
})
export class ReciepsComponent {
  recipes: Recipe[] = [];
  recipe: Recipe;
  recipeIndex: number;
  flagEditModal: boolean = false;
  flagAddModal: boolean = false;
  @Output() recipe_out = Recipe;
  @Input() recipe_in = Recipe;

  constructor(private recipeService: RecipeService) {
    this.getAllRecipes();
  }
  getAllRecipes(): void {
    console.log('again');
    let recipeObserver: Observable<Recipe[]>;
    recipeObserver = this.recipeService.getRecipe();
    recipeObserver.subscribe((recipeFromDb) => {
      this.recipes = recipeFromDb;
    });
  }
  addNewRecipe(recipe: any) {
    console.log('adding recipe event');
    this.recipes.push(recipe);
  }
  async hideAddModal(flag: boolean) {
    this.flagAddModal = flag;
  }
  catchRecipe(recipeIndex: number) {
    this.recipe = this.recipes[recipeIndex];
    this.recipeIndex = recipeIndex;
    this.flagEditModal = true;
  }
  async createNewRecipe() {
    this.flagAddModal = true;
  }
  updateRecipes(recipe: Recipe) {
    this.recipes[this.recipeIndex] = recipe;
  }
}
