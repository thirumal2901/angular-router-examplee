import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service'

@Component({
  selector: 'app-my-service',
  templateUrl: './my-service.component.html',
  styleUrls: ['./my-service.component.css']
})
export class MyServiceComponent implements OnInit {

   constructor(private eventService:MyserviceService) {
    
  }
  const events = eventService.getEvents()

  ngOnInit() {
  }

}