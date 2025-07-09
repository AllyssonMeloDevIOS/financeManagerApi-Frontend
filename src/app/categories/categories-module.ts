import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Categories } from './categories';


const routes: Routes = [
  { path: '', component: Categories }
];

@NgModule({
  declarations: [
    Categories
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CategoriesModule { }
