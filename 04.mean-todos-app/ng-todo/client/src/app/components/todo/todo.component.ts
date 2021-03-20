import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Todo } from 'src/app/shared/models';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
    @Input()
    set data(value: Todo) {
        this.isCompletedCtrl.setValue(value.isCompleted);
        this.todo = value;
    }
    get data(): Todo {
        return this.todo;
    }

    @Output() completed: EventEmitter<boolean> = new EventEmitter();
    @Output() delete: EventEmitter<void> = new EventEmitter();
    @Output() editText: EventEmitter<string> = new EventEmitter();

    isLoading$ = new BehaviorSubject<boolean>(false);
    isCompletedCtrl: FormControl;
    isEdit = false;

    private todo!: Todo;

    constructor(
        private fb: FormBuilder
    ) {
        this.isCompletedCtrl = this.fb.control(false);
    }

    ngOnInit(): void {
        this.isCompletedCtrl.valueChanges
            .subscribe(value => this.completed.next(value));
    }

    toggleEdit(): void {
        this.isEdit = !this.isEdit;
    }

    onDelete(): void {
        this.delete.emit();
    }

    saveEdit(value: string): void {
        this.editText.emit(value);
        this.toggleEdit();
    }
}
