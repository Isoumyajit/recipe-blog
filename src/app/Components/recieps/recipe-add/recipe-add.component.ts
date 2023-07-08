import { Component, Output, EventEmitter } from '@angular/core';
import { AddRecipeServiceService } from 'src/Services/add-recipe-service.service';
import { Recipe } from '../model/recipe.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css'],
})
export class RecipeAddComponent {
  @Output() hideModalemitter = new EventEmitter<boolean>();
  @Output() recipeEmitter = new EventEmitter<Recipe>();
  recipeName: string = '';
  recipeDesc: string = '';
  recipeImage: string = '';
  constructor(private addRecipeService: AddRecipeServiceService) {}
  getName(name: any) {
    this.recipeName = name.target.value;
  }

  getDesc(desc: any) {
    this.recipeDesc = desc.target.value;
  }

  getImage(image: any) {
    this.recipeImage = image.target.value;
  }
  hideModal() {
    this.hideModalemitter.emit(false);
  }
  addRecipe() {
    const recipeItem = new Recipe(
      '',
      this.recipeName,
      this.recipeDesc,
      this.recipeImage
    );
    let addrecipeService: Observable<Recipe>;
    addrecipeService = this.addRecipeService.addRecipe(recipeItem);
    addrecipeService.subscribe(async (res) => {
      console.log(res);
    });
    this.recipeEmitter.emit(recipeItem);
    this.hideModal();
  }
}
