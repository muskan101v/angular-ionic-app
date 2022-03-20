import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecepiesPageRoutingModule } from './recepies-routing.module';

import { RecepiesPage } from './recepies.page';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecepiesPageRoutingModule
  ],
  declarations: [RecepiesPage, RecipeItemComponent]
})
export class RecepiesPageModule {}
