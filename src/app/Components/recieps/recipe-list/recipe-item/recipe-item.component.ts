import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../model/recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipeItem: Recipe;
  @Input() recipeIndex: number;
  @Output() recipeEmmiter = new EventEmitter<number>();
  sendRecipe(id: number) {
    this.recipeEmmiter.emit(id);
  }
  constructor() {}
}
