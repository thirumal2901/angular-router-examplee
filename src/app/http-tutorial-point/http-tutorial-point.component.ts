import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add//operator/map';

@Component({
  selector: 'app-http-tutorial-point',
  templateUrl: './http-tutorial-point.component.html',
  styleUrls: ['./http-tutorial-point.component.css']
})
export class HttpTutorialPointComponent implements OnInit {
constructor(private http: Http) { }
   httpdata;
   ngOnInit() {
      this.http.get("http://jsonplaceholder.typicode.com/users").
      map(
         (response) => response.json()
      ).
      subscribe(
         (data) => {this.displaydata(data);}
      )
   }
   displaydata(data) {this.httpdata = data;}
}