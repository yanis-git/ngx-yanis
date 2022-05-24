import {Component} from '@angular/core';
import {snippets} from './snippets';

@Component({
  selector: 'ngx-youtube-usage',
  template: `
    <section class="innerContainer">
      <h2>Usage</h2>
      <p>On your <code>Component</code>, you can use the following code:</p>
      <ngx-code-snippet [code]="snippets.component"></ngx-code-snippet>

      <p>On your <code>HTML</code> file you can use the following code:</p>
      <ngx-code-snippet [code]="snippets.html"></ngx-code-snippet>
      <p>
        HTML element with the class <code>cover</code> will be interpolate on the overlay. it will be displayed until
        video start playing.
      </p>
      <p>
        You may notice a delay between page load and video playing. Player wait 4 seconds starting, goal is to mask
        Youtube interface.
      </p>
    </section>
  `
})
export class NgxYoutubeUsageComponent {
  snippets = snippets
}
