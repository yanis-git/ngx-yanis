import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { CodeSnippetComponent } from './code-snippet.component';

@NgModule({
  declarations: [CodeSnippetComponent],
  imports: [CommonModule, HighlightModule],
  exports: [CodeSnippetComponent],
})
export class CodeSnippetModule {
  static forRoot(): ModuleWithProviders<CodeSnippetModule> {
    return {
      ngModule: CodeSnippetModule,
      providers: [
        {
          provide: HIGHLIGHT_OPTIONS,
          useValue: {
            coreLibraryLoader: () => import('highlight.js/lib/core'),
            languages: {
              typescript: () => import('highlight.js/lib/languages/typescript'),
              css: () => import('highlight.js/lib/languages/css'),
              xml: () => import('highlight.js/lib/languages/xml'),
            },
          },
        },
      ],
    };
  }
}
