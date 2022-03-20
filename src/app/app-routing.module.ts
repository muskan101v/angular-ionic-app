import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./recepies/recepies.module').then(
            (m) => m.RecepiesPageModule
          ),
      },
      {
        path: ':recipeId',
        loadChildren: () =>
          import('./recepies/recipe-detail/recipe-detail.module').then(
            (m) => m.RecipeDetailPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
