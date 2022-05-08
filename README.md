# ngx-details 

Angular Wrapper for `details` html tags.

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
<ngx-details>
  <ngx-summary> Text which will be display to summarize the content. </ngx-summary>
  <p> the rest of this content will be displayed only when user interact with the details tag. </p>
</ngx-details>
```

## Available Input/Output
To know if the details tag is open or closed, you can use the following input/output:
```
<ngx-details (isOpen)="myCallback($event)">
```

To control the details tag, you can use the following input/output:
```
<ngx-details [(open)]="someBooleanVariable">
```


## General Information
This library is powered by [Nx](https://nx.dev/angular)
