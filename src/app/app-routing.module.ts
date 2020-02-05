import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanListComponent } from './components/plan-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'plans' },
  { path: 'plans', component: PlanListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
