// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Importa seu módulo atual (auth)
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    // aqui pode entrar o AppComponent quando criar
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard-module').then(m => m.DashboardModule) }, { path: 'summary', loadChildren: () => import('./summary/summary-module').then(m => m.SummaryModule) }, { path: 'categories', loadChildren: () => import('./categories/categories-module').then(m => m.CategoriesModule) }]),  // vamos configurar rotas depois
    AuthModule                 // importa o módulo auth aqui
  ],
  providers: [],
  bootstrap: [] // depois você configura o componente raiz, ex: AppComponent
})
export class AppModule { }
