import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ADD_RECIPE_URL } from 'constants/urls';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/Components/recieps/model/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class AddRecipeServiceService {
  constructor(private http: HttpClient) {}
  addRecipe(recipeData: Recipe): Observable<Recipe> {
    console.log('I am adding');
    console.log(recipeData);
    return this.http.post<Recipe>(ADD_RECIPE_URL, JSON.stringify(recipeData), {
      headers: { 'content-type': 'application/json' },
    });
  }
}
