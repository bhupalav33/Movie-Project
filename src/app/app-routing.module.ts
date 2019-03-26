import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { PageErrorComponent } from './page-error/page-error.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/movies-list',
		pathMatch: 'full'
	},
	{
		path: 'movies-list',
		component: MoviesListComponent
	},
	{
		path: 'movie-detail/:id',
		component: MoviesDetailsComponent
	},
	{
		path: '**',
		component: PageErrorComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
