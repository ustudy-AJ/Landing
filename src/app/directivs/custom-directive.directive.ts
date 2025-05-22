import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor() { }
  @HostBinding("style.background") bg = "red";
  @HostListener("click")
  click(){
    this.bg = "green";
    console.log("Man bosildi");
  }
  @HostListener("window:resize")
  onResize(){
    this.bg = "red";
    console.log("Ekran razmerini o`zgratirdi");
  };

}
