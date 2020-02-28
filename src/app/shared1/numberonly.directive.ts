import { Directive, HostListener, ElementRef } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Directive({
  selector: '[appNumberonly]',
  providers: [DecimalPipe]
})
export class NumberonlyDirective {

  private el: any;

  constructor(
    private elementRef: ElementRef,
    private formatcurrencypipe: DecimalPipe
  ) {
    this.el = this.elementRef.nativeElement;
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.el.value = this.formatcurrencypipe.transform(this.el.value, '1.2-3');
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value: any) {
    this.el.value = this.formatcurrencypipe.transform(value, '1.2-3');
  }

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    console.log('directive listens');
    const e = event as KeyboardEvent;
    // tslint:disable-next-line: deprecation
    if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        // tslint:disable-next-line: deprecation
        (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+C
        // tslint:disable-next-line: deprecation
        (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+V
        // tslint:disable-next-line: deprecation
        (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+X
        // tslint:disable-next-line: deprecation
        (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
        // Allow: home, end, left, right
        // tslint:disable-next-line: deprecation
        (e.keyCode >= 35 && e.keyCode <= 39)) {
          // let it happen, don't do anything
          return;
        }
        // Ensure that it is a number and stop the keypress
    // tslint:disable-next-line: deprecation
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();

      }
    }
}
