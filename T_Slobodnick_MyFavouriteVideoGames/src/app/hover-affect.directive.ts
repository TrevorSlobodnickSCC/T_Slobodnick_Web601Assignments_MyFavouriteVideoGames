import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  @Input() hoverAffect = "underline";

  constructor(private elm: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter(type: any){
    if (this.hoverAffect == "underline") {
      this.elm.nativeElement.style.textDecoration = "underline";
    }
    else if(this.hoverAffect == "bold"){
      this.elm.nativeElement.style.fontWeight = "bold";
    }
  }

  @HostListener('mouseleave') onMouseLeave(type: any){
    if (this.hoverAffect == "underline") {
      this.elm.nativeElement.style.removeProperty("text-decoration");
    }
    else if(this.hoverAffect == "bold"){
      this.elm.nativeElement.style.removeProperty("font-weight");
    }
  }

}
