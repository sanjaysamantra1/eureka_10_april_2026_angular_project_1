import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomin]',
})
export class Zoomin {
  // let obj = new ElementRef();

  // ele instance of ElementRef class
  constructor(private ele: ElementRef) { // Dependency Injection
    console.log(ele.nativeElement)
  }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.ele.nativeElement.style.transform = 'scale(100%,105%)'
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.ele.nativeElement.style.transform = 'scale(100%)'
  }
}
