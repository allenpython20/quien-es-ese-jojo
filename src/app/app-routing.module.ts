import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path : 'characters',
    loadChildren : () => import('./characters/characters.module').then( m => m.CharactersModule)
  },
  {
    path : 'stands',
    loadChildren : () => import('./stands/stands.module').then( m => m.StandsModule)
  },
  {
    path : '**',
    redirectTo : 'characters'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
