import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'


@Component({
  selector: 'app-http-request',
  template: `
    <h1>Making a Request</h1>
   
    <button class="btn btn-primary" (click)="makeRequest()">Send Request</button>
    
    <div *ngFor="let movie of movieList">
      {{movie.title}}
    </div>
  `
})
export class HttpRequestComponent {
  movieList;
  
  constructor(private http: Http) {}

  makeRequest() {
    this.http.get("http://swapi.co/api/films/")
    .map((response: Response) => {
      return response.json();
    })
    .subscribe(data => {
      this.movieList = data.results;
    })
  }
  
}
