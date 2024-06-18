import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { TooltipCondition } from './tooltip-condition.interface';

@Directive({
  selector: '[appDynamicTooltip]'
})
export class DynamicTooltipDirective implements OnInit {
  @Input('appDynamicTooltip') tooltipConfig: { data: any, conditions: TooltipCondition[] } = { data: null, conditions: [] };

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const { data, conditions } = this.tooltipConfig;
    if (data && conditions) {
      for (const condition of conditions) {
        if (condition.condition(data)) {
          const message = typeof condition.message === 'function' ? condition.message(data) : condition.message;
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
