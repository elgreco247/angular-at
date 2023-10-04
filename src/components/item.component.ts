import { Component, Input } from '@angular/core';

@Component({
  selector: 'item',
  standalone: true,
  template: `Item: {{id}}`,
  styles: ':host {display: block}',
})
export class ItemComponent {
  @Input() id: number;
}
