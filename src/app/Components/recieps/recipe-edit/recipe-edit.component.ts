import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EditRecipeServiceService } from 'src/Services/edit-recipe-service.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent {
  recipeName: string;
  recipeDesc: string;
  recipeIamgePath: string;
  @Output() showEditModal = new EventEmitter<boolean>();
  @Output() editDataEmitter = new EventEmitter<Recipe>();
  @Input() modalData: Recipe;
  constructor(private updateRecipeService: EditRecipeServiceService) {}
  isShowModal(flag: boolean) {
    this.showEditModal.emit(flag);
  }
  updateRecipe(recipeName: string, recipeDesc: string, recipeImage: string) {
    const updatedRecipe = new Recipe(
      this.modalData._id,
      recipeName,
      recipeDesc,
      recipeImage
    );
    let editService: Observable<Recipe>;
    editService = this.updateRecipeService.editRecipe(updatedRecipe);
    editService.subscribe((res) => {
      console.log(res);
    });
    this.isShowModal(false);
    this.editDataEmitter.emit(updatedRecipe);
  }
}
