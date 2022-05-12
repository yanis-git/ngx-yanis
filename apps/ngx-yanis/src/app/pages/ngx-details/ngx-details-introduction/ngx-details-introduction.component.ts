import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'ngx-details-introduction',
  template: `<h2>Introduction</h2>
<p><code>Ngx-details</code> is an angular library that makes it easy to use the <code>&lt;details&gt;</code> element. It provides components and directives that make it easy to show or hide content depending on whether or not the <code>&lt;details&gt;</code> element is expanded. This can be useful for displaying additional information about a particular item, or for hiding sensitive information until it is needed.</p>

<h2>Key features</h2>
<p>The <code>ngx-details</code> library also includes a number of features that make it easy to use with Angular components and directives. These include:</p>
<ul>
  <li>Control the expanded state by providing <code>[open]</code> input to the directive. </li>
  <li>Know if the expanded state change by listening <code>(isOpen)</code> output to the directive. </li>
</ul>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxDetailsIntroductionComponent { }
