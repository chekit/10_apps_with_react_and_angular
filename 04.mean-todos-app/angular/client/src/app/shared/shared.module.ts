import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components';
import { LoaderComponent, LoaderDirective } from './directives';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule
    ],
    declarations: [
        LoaderDirective,
        LoaderComponent,
        InputComponent
    ],
    exports: [
        InputComponent,
        LoaderDirective,
        ReactiveFormsModule,
        CommonModule
    ]
})
export class SharedModule { }
