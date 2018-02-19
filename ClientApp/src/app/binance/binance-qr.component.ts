import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: "binance-qr",
  templateUrl:"./binance-qr.component.html",
  styleUrls:['./binance-qr.component.css']
})
export class BinanceQRComponent {

  public showQR: boolean = false;

  constructor(private _elementRef: ElementRef) { }

  openQRWindow = (): void => {
    this.showQR = !this.showQR;
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    if (this.showQR && !this._elementRef.nativeElement.contains(targetElement))
    {
      this.showQR = false;
    }
  }
}
