import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({ selector: '[pkmn-shadow-card]' })
export class ShadowCardDirective {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.setBorder('#f5f5f5');
        this.setHeight('180px');
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder('#009688');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder('#f5f5f5');
    }

    private setBorder(color: string) {
        let style = 'solid 4px ' + color;
        this.renderer.setStyle(this.el.nativeElement, 'border', style);
    }

    private setHeight(height: string) {
        this.renderer.setStyle(this.el.nativeElement, 'height', height);
    }

}