import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'ngx-summary',
  template: `<summary><ng-content></ng-content></summary>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryComponent {}
