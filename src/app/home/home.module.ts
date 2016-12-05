import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpgradeModule } from "@angular/upgrade/static";
import { HomeComponent } from './home.component';

import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: "", component: HomeComponent
    }])
  ],
  declarations: [
    HomeComponent
  ],
  entryComponents: [HomeComponent]
})
export class HomeModule {}