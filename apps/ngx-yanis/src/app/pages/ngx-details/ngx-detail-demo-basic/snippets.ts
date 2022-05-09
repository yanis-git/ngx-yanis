import { CodeSnippetType } from '../../../features/code-snippet/type';

export const snippets: CodeSnippetType = {
  html: `<details ngxDetails (isOpen)="onOpenChange($event)">
  <summary>I am the summary</summary>
  <p>I am the details of the component.</p>
</details>`,
  component: `@Component()
export class NgxDetailsDemoBasicComponent {
  isOpen = false;
  onOpenChange(isOpen: boolean) {
    this.isOpen = isOpen;
  }
}`
}
