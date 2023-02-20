import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule],
  declarations: [HomeComponent],
  exports: [
    HomeComponent
  ]
})
export class DifferentPagesModule {}
