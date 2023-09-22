import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'ngx-code-snippet',
  template: `
    <pre><code [highlight]="code"></code></pre>
  `,
  styleUrls: ['./code-snippet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeSnippetComponent {
  @Input() code = '';
}
