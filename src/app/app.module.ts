import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReciepsComponent } from './Components/recieps/recieps.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { RecipeDetailComponent } from './Components/recieps/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './Components/recieps/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './Components/recieps/recipe-list/recipe-item/recipe-item.component';
import { IngredientsListComponent } from './Components/ingredients-list/ingredients-list.component';
import { RecipeEditComponent } from './Components/recieps/recipe-edit/recipe-edit.component';
import { RecipeAddComponent } from './Components/recieps/recipe-add/recipe-add.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeService } from 'src/Services/recipe.service';
@NgModule({
  declarations: [
    AppComponent,
    ReciepsComponent,
    FooterComponent,
    HeaderComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    IngredientsListComponent,
    RecipeEditComponent,
    RecipeAddComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
