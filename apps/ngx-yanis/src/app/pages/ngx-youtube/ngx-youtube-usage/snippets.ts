import {CodeSnippetType} from '../../../features/code-snippet/type';

export const snippets: CodeSnippetType = {
  html: `<ngx-youtube-player [youtubeId]="'Bc_RrCNWTyo'" (readyChange)="onReadyChange($event)">
    <img class="cover" [ngClass]="ready ? 'loaded' : ''" src="https://i.ytimg.com/vi/Bc_RrCNWTyo/maxresdefault.jpg" alt="">
  </ngx-youtube-player>`,
  component: `@Component()
export class NgxYoutubeDemoComponent {
  ready = false;

  onReadyChange($event: boolean) {
    this.ready = $event;
  }
}`
}
