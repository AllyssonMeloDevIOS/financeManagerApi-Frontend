import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Summary } from './summary';


const routes: Routes = [
  { path: '', component: Summary }
];

@NgModule({
  declarations: [
    Summary
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SummaryModule { }
