import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MoviesDataService {
	private _url: string = "https://backend-ygzsyibiue.now.sh/api/v1/movies/";
  	
  	constructor( private http: HttpClient) {} 

	getMoviesList(): Observable<any>{
		return this.http.get<any>(this._url);
	}
	getSingleMovie(id): Observable<any>{
		return this.http.get<any>(this._url + id);
	}
}
