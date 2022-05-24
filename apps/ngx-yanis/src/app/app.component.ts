import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'nx-angular-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav></nav>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer></footer>
  `,
})
export class AppComponent {
}
