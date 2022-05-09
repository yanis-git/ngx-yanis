import {
  ChangeDetectionStrategy,
  Component,
  AfterViewInit,
  ContentChild,
  Output,
  EventEmitter,
  Input, ViewChild, ElementRef
} from '@angular/core';
import {SummaryComponent} from '../summary/summary.component';

@Component({
  selector: 'ngx-details',
  template: `<details #detailsElement (click)="onClickHandler()" [open]="open"><ng-content></ng-content></details>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements AfterViewInit {
  @Input()  open = false;
  @Output() isOpen = new EventEmitter<boolean>();
  @ContentChild(SummaryComponent) summary!: SummaryComponent;
  @ViewChild('detailsElement') details!: ElementRef<HTMLDetailsElement>;

  ngAfterViewInit() {
    if (!this.summary) {
      throw 'ngx-details: You must provide a summary component';
    }
  }

  onClickHandler() {
    this.isOpen.emit(!this.details.nativeElement.hasAttribute('open'));
  }
}
