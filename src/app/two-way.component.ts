import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way',
  template: `
    <input type="text" ngModel="person.name">
    <input type="text" ngModel="person.name">
  `,
  styles: []
})
export class TwoWayComponent{
  person = {
    name : 'Chamath',
    age : 27
  };

}
