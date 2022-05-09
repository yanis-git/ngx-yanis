import {
  AfterViewInit,
  ContentChild,
  Output,
  EventEmitter,
  Input, ElementRef, Directive, OnDestroy
} from '@angular/core';
import {SummaryDirective} from '../summary/summary.directive';
import {fromEvent, Subscription} from 'rxjs';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'details[ngxDetails]'
})
export class DetailsDirective implements AfterViewInit, OnDestroy {
  _internalIsOpen = false;

  @Input() set open(state:boolean) {
    this._internalIsOpen = state;
    if (this.element) {
      this.changeOpenAttribute();
    }
  };

  @Output() isOpen:EventEmitter<boolean> = new EventEmitter<boolean>();
  @ContentChild(SummaryDirective) summary!: SummaryDirective;

  private _subscription!: Subscription;
  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    if (!this.summary && !this.element.nativeElement.querySelector('summary')) {
      throw 'ngx-details: You must provide a summary directive or native html element with a summary tag';
    }
    this.changeOpenAttribute();
    this.isOpen.emit(this.element.nativeElement.hasAttribute('open'));
    this._subscription = fromEvent(this.element.nativeElement, 'click').subscribe(() => {
      this.onClickHandler();
    });
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  onClickHandler() {
    this.isOpen.emit(!this.element.nativeElement.hasAttribute('open'));
  }

  changeOpenAttribute() {
    if (this._internalIsOpen) {
      this.element.nativeElement.setAttribute('open', '');
    } else {
      this.element.nativeElement.removeAttribute('open');
    }
  }
}
