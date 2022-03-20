import { Injectable } from '@angular/core';
import { Recipes } from './recepies.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipes[] = [
    {
      id: 'r1',
      title: 'Fruits',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg',
      ingredients: ['Mango', 'Apple', 'PineApple', 'Banana'],
    },
    {
      id: 'r2',
      title: 'Chinese',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://www.thespruceeats.com/thmb/X6mg_2VBCQQ2X8VrLcPTf8_4ce0=/2733x2050/smart/filters:no_upscale()/chinese-take-out-472927590-57d31fff3df78c5833464e7b.jpg',
      ingredients: ['Chaumine', 'Momos', 'French Fries', 'Noodles'],
    },
  ];
  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }
  getRecipe(recipeId: string) {
    return {...this.recipes.find((recipe)=>recipe.id === recipeId)
  };
}

deleteRecipe(recipeId: string){
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
this.recipes = this.recipes.filter(recipe=> recipe?.id!== recipeId);
}
}
