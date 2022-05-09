# ngx-details
Angular wrapper for [details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) native DOM element.

## Compatibility
* Angular 13.x
* Chrome
* Edge
* Firefox

## Accessibility
This component is a11y friendly.

## Installation
```
npm install --save @ngx-yanis/ngx-details
```
Then import module in your project:
```
import { NgxDetailsModule } from '@ngx-yanis/ngx-details';

@NgModule({
  imports: [
    ...
    NgxDetailsModule
  ]
})
export class AppModule { }
```

## Usage
```
<details ngxDetails>
  <ngx-summary> Text which will be display to summarize the content. </ngx-summary>
  <p> the rest of this content will be displayed only when user interact with the details tag. </p>
</details>
```

## Available Input/Output
To know if the details tag is open or closed, you can use the following input/output:
```
<details ngxDetails (isOpen)="myCallback($event)">
```

To control the details tag, you can use the following input/output:
```
<details ngxDetails [(open)]="someBooleanVariable">
```
## General Information
This library is powered by [Nx](https://nx.dev/angular). Source are available on [Github](https://github.com/yanis-git/ngx-yanis/tree/main/libs/ngx-details).
