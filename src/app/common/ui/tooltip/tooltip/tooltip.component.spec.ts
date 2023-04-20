import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, Injector, Input } from "@angular/core";
import {TooltipComponent} from "./tooltip.component";

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {

  @Input() tooltip = '';


  constructor(
	private elementRef: ElementRef,
	private appRef: ApplicationRef, 
	private componentFactoryResolver: ComponentFactoryResolver,
	private injector: Injector) {
  }
}