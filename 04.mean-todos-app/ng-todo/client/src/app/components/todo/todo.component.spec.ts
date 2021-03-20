import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { InputComponent } from 'src/app/shared/components';
import { Todo } from 'src/app/shared/models';
import { TodoComponent } from './todo.component';
import { TodoPage } from './todo.component.spec-page';

const todo = new Todo({
    _id: '00`1',
    text: 'Test ToDo Component',
    isCompleted: false
})

describe('ToDo Component', () => {
    let fixture: ComponentFixture<TodoComponent>;
    let component: TodoComponent;
    let page: TodoPage;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            declarations: [TodoComponent, InputComponent],
            providers: [
                // {
                //     provide: ComponentFixtureAutoDetect,
                //     useValue: true
                // }
            ]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoComponent);
        component = fixture.componentInstance;
        page = new TodoPage(fixture);

        component.data = todo;
    });

    it('should compile', () => {
        fixture.detectChanges();

        expect(component).toBeTruthy();
    });

    it('should switch to editing mode', () => {
        fixture.detectChanges();

        expect(page.manageTodoButtonsContainer).toBeTruthy();
        expect(page.manageTodoEditButtonsContainer).toBeFalsy();
        expect(component.isEdit).toBeFalsy();

        page.clickButton(page.editTodoButton);
        fixture.detectChanges();

        expect(page.manageTodoButtonsContainer).toBeFalsy();
        expect(page.manageTodoEditButtonsContainer).toBeTruthy();
        expect(component.isEdit).toBeTruthy();
    });

    it('should emit updated todo text', done => {
        component.editText.subscribe(text => {
            expect(text).toEqual('Edited Test Todo');
            done();
        })

        fixture.detectChanges();

        page.clickButton(page.editTodoButton);

        const input = fixture.debugElement.query(By.directive(InputComponent));
        (input.componentInstance as InputComponent).todoCtrl.setValue('Edited Test Todo');
        fixture.detectChanges();

        page.clickButton(page.saveTodoButton);
    });

    it('should emit todo is completed', done => {
        component.completed.subscribe(value => {
            expect(value).toBeTruthy();
            done();
        })

        fixture.detectChanges();

        page.completeTodoCheckbox.click()
        fixture.detectChanges();
    });

    it('should emit delete toto', done => {
        component.delete.subscribe(value => {
            expect(value).toBeUndefined();
            done();
        })

        fixture.detectChanges();

        page.clickButton(page.deleteTodoButton);
    });
});