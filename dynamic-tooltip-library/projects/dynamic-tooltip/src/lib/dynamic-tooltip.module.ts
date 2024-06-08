// projects/dynamic-tooltip/src/lib/dynamic-tooltip.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTooltipDirective } from './dynamic-tooltip.directive';

@NgModule({
  declarations: [DynamicTooltipDirective],
  imports: [CommonModule],
  exports: [DynamicTooltipDirective]
})
export class DynamicTooltipModule {}
