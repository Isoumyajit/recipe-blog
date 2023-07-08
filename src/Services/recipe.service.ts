import { Observable } from 'rxjs';
import { RECIPE_URL } from 'constants/urls';
import { Recipe } from 'src/app/Components/recieps/model/recipe.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}
  getRecipe(): Observable<Recipe[]> {
    console.log('yes');
    return this.http.get<Recipe[]>(RECIPE_URL);
  }
}
