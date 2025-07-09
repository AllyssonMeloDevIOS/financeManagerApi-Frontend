// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: 'login', loadChildren: () => import('./auth-module').then(m => m.AuthModule) }]) // Configurar rotas depois
  ],
  providers: [],
  bootstrap: [] // Coloque o componente root aqui, ex: AppComponent
})
export class AppModule { }
