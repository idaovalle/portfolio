import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[viewElement]',
})
export class ViewElementQuiz {
  @Input() isCorrect: boolean = true;
  constructor(private _el: ElementRef, private _render: Renderer2) {
    if (!this.isCorrect) {
      this._render.setStyle(this._el.nativeElement, 'border-color', 'red');
    } else {
      this._render.setStyle(this._el.nativeElement, 'border-color', 'green');
    }
  }
}
