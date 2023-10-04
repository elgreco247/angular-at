import { Component } from '@angular/core';

@Component({
  selector: 'foo',
  standalone: true,
  template: `With immediate the component is lazy loaded (check the separate chunk)`,
})
export class FooComponent {}
