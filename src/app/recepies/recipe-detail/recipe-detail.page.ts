import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipes } from '../recepies.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipeDetail: Recipes;
  constructor(
    private activateRoute: ActivatedRoute,
    private readonly recipeService: RecipeService,
    private readonly route: Router,
    private readonly alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((paramRes) => {
      if (!paramRes.has('recipeId')) {
        this.route.navigate(['/recipes']);
        return;
      }
      const recipeId = paramRes.get('recipeId');
      this.recipeDetail = this.recipeService.getRecipe(recipeId);
    });
  }
  onDeleteRecipe() {
    this.alertCtrl
      .create({
        header: 'Are you sure?',
        message: 'Do you really want to delete the recipe?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Delete',
            handler: () => {
              this.recipeService.deleteRecipe(this.recipeDetail.id);
              this.route.navigate(['/recipes']);
            },
          },
        ],
      })
      .then((alterEl) => {
        alterEl.present();
      });
  }
}
