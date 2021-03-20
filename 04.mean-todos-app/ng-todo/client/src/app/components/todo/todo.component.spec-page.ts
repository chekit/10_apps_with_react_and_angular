import { Page } from 'src/app/spec/spec-page';
import { TodoComponent } from './todo.component';

export class TodoPage extends Page<TodoComponent> {
    get editTodoButton(): HTMLButtonElement {
        return this.query<HTMLButtonElement>('[data-test-edit-todo-button]');
    }

    get saveTodoButton(): HTMLButtonElement {
        return this.query<HTMLButtonElement>('[data-test-save-todo-button]');
    }

    get deleteTodoButton(): HTMLButtonElement {
        return this.query<HTMLButtonElement>('[data-test-delete-todo-button]');
    }

    get cancelEditTodoButton(): HTMLButtonElement {
        return this.query<HTMLButtonElement>('[data-test-cancel-todo-button]');
    }

    get manageTodoButtonsContainer(): HTMLElement {
        return this.query<HTMLButtonElement>('[data-test-manage-todo-buttons]');
    }

    get manageTodoEditButtonsContainer(): HTMLElement {
        return this.query<HTMLButtonElement>('[data-test-manage-todo-edit-buttons]');
    }

    get completeTodoCheckbox(): HTMLInputElement {
        return this.query<HTMLInputElement>('[data-test-complete-todo-checkbox]');
    }
}