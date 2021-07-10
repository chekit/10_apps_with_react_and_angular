import { ComponentFixture } from '@angular/core/testing';

export class Page<T> {
    constructor(private fixture: ComponentFixture<T>) {}

    query<T>(selector: string): T {
        return this.fixture.nativeElement.querySelector(selector);
    }

    queryAll(selector: string): NodeListOf<HTMLElement> {
        return this.fixture.nativeElement.querySelectorAll(selector);
    }

    clickButton(button: HTMLButtonElement): void {
        button.click();
        this.fixture.detectChanges();
    }
}