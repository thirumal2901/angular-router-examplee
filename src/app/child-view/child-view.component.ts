import { Component, Output, Input, EventEmitter } from '@angular/core'

@Component({
  selector: 'child',
  template: ` 
  <h3>Child to Parent: Sharing Data via Output</h3>
    <h3>Child Counter: {{counter}}</h3>
    <button class="btn btn-primary" (click)="buttonClicked()">Click Me!</button> 
    <h3>Parent to Child: Sharing Data via Input</h3>
     <h4>childMessage: {{childMessage}}</h4>
    ` 

    
  
})
export class ChildViewComponent { 
  @Input() childMessage: string;
  @Output() buttonClick = new EventEmitter()
  counter = 0
  
  ngOnInit() {
    setInterval(() => {this.counter++}, 1000)
  }
  
  buttonClicked() {
    this.buttonClick.emit(this.counter)
  }
}