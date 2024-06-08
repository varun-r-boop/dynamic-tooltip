export interface TooltipCondition {
  condition: (data: any) => boolean;
  message: string | ((data: any) => string);
}
