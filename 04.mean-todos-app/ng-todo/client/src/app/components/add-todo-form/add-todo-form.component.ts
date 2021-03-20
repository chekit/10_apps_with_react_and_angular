import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { TodoDTO } from 'src/app/shared/models';

@Component({
    selector: 'app-add-todo-form',
    templateUrl: './add-todo-form.component.html',
    styleUrls: ['./add-todo-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoFormComponent {
    text = '';

    @Output() addTodo = new EventEmitter<TodoDTO>();

    @ViewChild(InputComponent) input!: InputComponent;

    onInputChange(value: string): void {
        this.text = value;
    }

    submit(text: string): void {
        this.addTodo.emit({ text, isCompleted: false });
        this.input.clear();
    }
}
