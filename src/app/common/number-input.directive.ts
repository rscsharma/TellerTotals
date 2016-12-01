import { Directive, Input, ElementRef, Renderer, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[comNumberInput]'
})
export class NumberInputDirective implements OnInit {

  @Input("comNumberInput") decimalPlaces: number;  // used in binding and provides number of decimals [comNumberInput]="2"

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    this.setValue(this.transform(this.el.nativeElement.value));
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
//    this.setValue(this.reverseTransform(value));
  }

  @HostListener("keydown", ["$event"])
  onkeydown(value) {
//    this.setValue(this.reverseTransform(value));
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    this.setValue(this.transform(value));
  }

  private transform(value: string): string {

    let amount: number = Number(value);
    if (isNaN(amount))
    {
      return value;
    }

    return amount.toFixed(this.decimalPlaces);
  }

  private reverseTransform(value: string): string {
    return "reverse transformed " + value;
  }
  private setValue(value: string): void {
    this.renderer.setElementProperty(this.el.nativeElement, "value", value);
  }
}
