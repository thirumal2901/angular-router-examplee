import { Component, OnInit } from '@angular/core';
import { Product } from './product'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  model = new Product(1,'ProductA');

  ngOnInit() {
  }

}