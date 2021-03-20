import { ComponentFactoryResolver, Directive, Input, ViewContainerRef } from '@angular/core';
import { LoaderComponent } from './loader.component';

@Directive({
    selector: '[loading]'
})
export class LoaderDirective {
    @Input() set loading(value: boolean) {
        if (value) {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(LoaderComponent);
            this.view.createComponent(componentFactory);
        } else {
            this.view.remove();
        }
    }

    constructor(
        private view: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver
    ) { }
}
