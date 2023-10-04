import { Component } from '@angular/core';

@Component({
  selector: 'viewport-lazy',
  standalone: true,
  template: `Lazy loaded when in viewport `,
})
export class ViewportLazyComponent {
  constructor() {
    console.log('Loaded when in viewport');
  }
}
