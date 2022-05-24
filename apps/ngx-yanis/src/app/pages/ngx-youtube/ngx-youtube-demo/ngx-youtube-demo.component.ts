import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'ngx-youtube-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ngx-youtube-demo.component.html',
  styleUrls: ['./ngx-youtube-demo.component.scss'],
})
export class NgxYoutubeDemoComponent {
  isReady = false;

  onReadyChange($event: boolean) {
    this.isReady = $event;
  }
}
