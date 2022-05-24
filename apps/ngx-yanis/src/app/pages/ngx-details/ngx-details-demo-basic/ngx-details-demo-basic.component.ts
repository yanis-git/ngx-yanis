import {ChangeDetectionStrategy, Component} from '@angular/core';
import {snippets} from './snippets';

@Component({
  selector: 'ngx-details-demo-basic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section>
      <h2>Demo and usage</h2>
      <div class="lightbox">
        <p>Is <code>&lt;details&gt;</code> is Open ? <strong>{{ isOpen ? 'Yes' : 'No' }}</strong></p>
        <details ngxDetails (isOpen)="onOpenChange($event)">
          <summary>I am the summary</summary>
          <p>I am the details of the component.</p>
        </details>
      </div>

      <p>The <code>ngx-details</code> directive is very easy to use. Just add it to your template, give it some content,
        and
        specify which elements should be collapsed:</p>

      <p>On your <code>Component</code>, you can use the following code:</p>
      <ngx-code-snippet [code]="snippets.component"></ngx-code-snippet>

      <p>On your <code>HTML</code> file you can use the following code:</p>
      <ngx-code-snippet [code]="snippets.html"></ngx-code-snippet>
    </section>
  `
})
export class NgxDetailsDemoBasicComponent {
  snippets = snippets;

  isOpen = false;

  onOpenChange(isOpen: boolean) {
    this.isOpen = isOpen;
  }
}
