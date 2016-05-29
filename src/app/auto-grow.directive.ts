import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)':'onFocus()',
        '(blur)':'onBlur()'
    }
})
export class AutoGrowDirective {
    constructor(private el: ElementRef, private renderer: Renderer) {
    }
    onFocus() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '400');
        this.renderer.setElementStyle(this.el.nativeElement, 'background', 'red');
    }
    onBlur() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
        this.renderer.setElementStyle(this.el.nativeElement, 'background', 'white');
    }
}