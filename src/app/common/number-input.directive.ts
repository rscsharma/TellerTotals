import { Directive, Input, ElementRef, Renderer, HostListener /*, OnInit, AfterViewInit, OnChanges, SimpleChanges */} from '@angular/core';

@Directive({
  selector: '[comNumberInput]'
})
export class NumberInputDirective /*implements OnInit*/ {

  @Input("comNumberInput") decimalPlaces: number;  // used in binding and provides number of decimals [comNumberInput]="2"

  constructor(private el: ElementRef, private renderer: Renderer) { }
/*
  ngOnInit() {
    this.setValue(this.transform(this.el.nativeElement.value));
  }

  ngAfterViewInit()
  {
    this.setValue(this.transform(this.el.nativeElement.value));
  }

  ngOnChanges(simpleChanges: SimpleChanges)
  {
    this.setValue(this.transform(this.el.nativeElement.value));
  }
*/

  @HostListener("keydown", ["$event"])
  onInput(event): boolean {

    if (event.key == "0" ||
      event.key == "1" ||
      event.key == "2" ||
      event.key == "3" ||
      event.key == "4" ||
      event.key == "5" ||
      event.key == "6" ||
      event.key == "7" ||
      event.key == "8" ||
      event.key == "9" ||
      event.key == "." ||
      event.key == "-" ||
      event.key == "ArrowLeft" ||
      event.key == "ArrowRight" ||
      event.key == "Home" ||
      event.key == "End" ||
      event.key == "Tab" ||
      event.key == "Backspace" ||
      event.key == "Delete") {
        return true;
    }

    return false;
  }

  @HostListener("keydown.Enter", ["$event.target.value"])
  onkeydown(value) {

    let newValue = this.transform(value);
    if (newValue != value)
    {
      // only set control if it changed.  setting control changes caret position 
      this.setValue(this.transform(value));
    }
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    this.setValue(this.transform(value));
  }

  private transform(value: string): string {

    let amount: number = Number(value);
    if (isNaN(amount))
    {
      return value; // leave intact
    }

    return amount.toFixed(this.decimalPlaces);
  }

  private setValue(value: string): void {
    this.renderer.setElementProperty(this.el.nativeElement, "value", value);
  }
}
