import { ComponentFactoryResolver, Directive, ElementRef, Input, ViewContainerRef } from '@angular/core';
import { LoaderComponent } from './loader.component';

@Directive({
    selector: '[loading]'
})
export class LoaderDirective {
    private loader?: LoaderComponent;

    @Input() set loading(value: boolean) {
        if (value) {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(LoaderComponent);
            this.view.createComponent(componentFactory);
        } else {
            this.view.remove();
        }
    }

    constructor(
        private el: ElementRef,
        private view: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver
    ) { }
}