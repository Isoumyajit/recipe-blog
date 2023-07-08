import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EDIT_RECIPE_URL } from 'constants/urls';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/Components/recieps/model/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class EditRecipeServiceService {
  constructor(private http: HttpClient) {}
  editRecipe(editedRecipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(
      EDIT_RECIPE_URL,
      JSON.stringify(editedRecipe),
      { headers: { 'Content-Type': 'application/json' } }
    );
  }
}
