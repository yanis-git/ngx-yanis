import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'nx-angular-ngx-youtube',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ngx-youtube-demo></ngx-youtube-demo>
    <ngx-youtube-intro></ngx-youtube-intro>
    <ngx-youtube-installation></ngx-youtube-installation>
    <ngx-youtube-usage></ngx-youtube-usage>
  `
})
export class NgxYoutubeComponent {
}
