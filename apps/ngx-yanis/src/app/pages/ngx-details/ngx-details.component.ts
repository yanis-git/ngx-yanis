import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'nx-angular-ngx-details',
  template: `
    <h1>Ngx-details - Details native element with Angular</h1>
    <ngx-details-introduction></ngx-details-introduction>
    <ngx-details-installation></ngx-details-installation>
    <ngx-details-demo-basic></ngx-details-demo-basic>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxDetailsComponent { }
