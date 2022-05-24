import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'ngx-youtube-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ngx-youtube-demo.component.html',
  styleUrls: ['./ngx-youtube-demo.component.scss'],
})
export class NgxYoutubeDemoComponent {
  ready = false;

  onReadyChange($event: boolean) {
    this.ready = $event;
  }
}
