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

@NgModule({
  declarations: [
    AppComponent,
    ReciepsComponent,
    FooterComponent,
    HeaderComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    IngredientsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
