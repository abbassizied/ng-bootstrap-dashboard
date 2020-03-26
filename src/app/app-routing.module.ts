import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import { Example4Component } from './example4/example4.component';
import { Example5Component } from './example5/example5.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


 
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'example1', component: Example1Component },
  { path: 'example2', component: Example2Component },
  { path: 'example3', component: Example3Component },
  { path: 'example4', component: Example4Component },
  { path: 'example5', component: Example5Component },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
