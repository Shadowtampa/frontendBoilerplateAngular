import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateToughtComponent } from './components/toughts/create-tought/create-tought.component';
import { ListToughtsComponent } from './components/toughts/list-toughts/list-toughts.component';
import { DeleteToughtComponent } from './components/toughts/delete-tought/delete-tought.component';
import { EditToughtComponent } from './components/toughts/edit-tought/edit-tought.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path : 'criarPensamento',
    component : CreateToughtComponent
  },
  {
    path : 'listarPensamento',
    component : ListToughtsComponent
  },
  {
    path : 'toughts/confirmToughtDeleting/:id',
    component : DeleteToughtComponent
  },
  {
    path : 'editTought/:id',
    component : EditToughtComponent
  }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
