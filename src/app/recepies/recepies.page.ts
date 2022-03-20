import { Component, OnInit } from '@angular/core';
import { Recipes } from './recepies.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.page.html',
  styleUrls: ['./recepies.page.scss'],
})
export class RecepiesPage implements OnInit {
  recipes: Recipes[];

  constructor(private readonly recipeSevice: RecipeService) {}

  ngOnInit() {}

  ionViewWillEnter(){
    this.getRecipe();
  }
  getRecipe() {
    this.recipes = this.recipeSevice.getAllRecipes();
    console.log(this.recipes);
  }
}
