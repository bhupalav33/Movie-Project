import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { MoviesDataService } from './../movies-data.service';
// import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {
  public movieId;
  public movieData = [];
  constructor(private route: ActivatedRoute, private serviceData: MoviesDataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap) => {
      this.movieId = params.get('id');
      this.serviceData.getSingleMovie(this.movieId)
  		.subscribe(data => this.movieData = data);
    });
  }
}
