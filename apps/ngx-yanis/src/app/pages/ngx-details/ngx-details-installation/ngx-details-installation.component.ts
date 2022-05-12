import { Component } from '@angular/core';
import {SNIPPETS_NG_MODULE_IMPORT, SNIPPETS_NPM_INSTALL} from './snippets';

@Component({
  selector: 'ngx-details-installation',
  template: `
    <h2>Installation</h2>
    <p>Package is available on npm.</p>
    <ngx-code-snippet [code]="npmInstall"></ngx-code-snippet>
    <p>After installing the package, you have to import <code>NgxDetailsModule</code> On your own module</p>
    <ngx-code-snippet [code]="moduleImport"></ngx-code-snippet>`
})
export class NgxDetailsInstallationComponent {
  moduleImport = SNIPPETS_NG_MODULE_IMPORT;
  npmInstall = SNIPPETS_NPM_INSTALL;

}
