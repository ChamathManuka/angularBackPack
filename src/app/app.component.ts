import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            <h1>Inline template</h1>
            <app-data-binding></app-data-binding>
            `,
  styles: [`
          h1{
          color: red;
          }
         `]
})
export class AppComponent {
  title = 'app';
}
