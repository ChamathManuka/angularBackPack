import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  template: `
    <h1>CHamath</h1>
    <app-event-binding (clicked)="onGo($event)"></app-event-binding>
    <app-two-way></app-two-way>
    <app-lifecycle-hooks></app-lifecycle-hooks>
  `,
  styles: [],
})
export class DataBindingComponent{
  onGo(value: string){
    alert(value);

  }


}
