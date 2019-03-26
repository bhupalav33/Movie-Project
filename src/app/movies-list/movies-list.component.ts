import { Component, OnInit, EventEmitter } from '@angular/core';
import { MoviesDataService } from './../movies-data.service';
import { Router } from '@angular/router';
import { Output } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  public movieList = [];
  @Output() message= new EventEmitter<any>();
  constructor(private _moviesData: MoviesDataService, private router: Router) { }

  ngOnInit() {
  	this._moviesData.getMoviesList()
  		.subscribe(data => this.movieList = data);
  }

  passID(moviesDetailsData){
    this.router.navigate(['/movie-detail',moviesDetailsData._id]);
    this.message.emit(moviesDetailsData);
  }
}
