import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
    todoCtrl: FormControl;

    @Input() set value(str: string) {
        this.todoCtrl.setValue(str, { emitEvent: false });
    }

    @Output() inputChange: EventEmitter<string> = new EventEmitter();

    constructor(
        private fb: FormBuilder
    ) {
        this.todoCtrl = this.fb.control(null, [Validators.required]);
    }

    ngOnInit(): void {
        this.todoCtrl.valueChanges
            .pipe(
                distinctUntilChanged(),
                debounceTime(300)
            )
            .subscribe(value => {
                this.inputChange.emit(value);
            });
    }

    clear(inputRef?: HTMLInputElement): void {
        this.todoCtrl.reset();

        if (inputRef) {
            inputRef.focus();
        }
    }
}
