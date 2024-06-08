import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { TooltipCondition } from './tooltip-condition.interface';

@Directive({
  selector: '[appDynamicTooltip]'
})
export class DynamicTooltipDirective implements OnInit {
  @Input() tooltipData: any;
  @Input() tooltipConditions: TooltipCondition[] = [];
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    if (this.tooltipData && this.tooltipConditions) {
      for (const condition of this.tooltipConditions) {
        if (condition.condition(this.tooltipData)) {
          const message = typeof condition.message === 'function' ? condition.message(this.tooltipData) : condition.message;
          this.setTooltip(message);
          break;
        }
      }
    }
  }

  private setTooltip(tooltipText: string) {
    this.renderer.setAttribute(this.el.nativeElement, 'data-tooltip', tooltipText);
  }
}
