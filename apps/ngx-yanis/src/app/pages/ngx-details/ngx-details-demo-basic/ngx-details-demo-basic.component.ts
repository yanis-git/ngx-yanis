import { Component } from '@angular/core';
import {snippets} from './snippets';

@Component({
  selector: 'ngx-details-demo-basic',
  templateUrl: './ngx-details-demo-basic.component.html',
  styleUrls: ['./ngx-details-demo-basic.component.scss'],
})
export class NgxDetailsDemoBasicComponent {
  snippets = snippets;

  isOpen = false;

  onOpenChange(isOpen: boolean) {
    this.isOpen = isOpen;
  }
}
