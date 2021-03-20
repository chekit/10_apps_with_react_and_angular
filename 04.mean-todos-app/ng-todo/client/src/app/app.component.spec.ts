import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { AddTodoFormComponent, TodoComponent } from './components';
import { TodoService } from './shared/services/todo.service';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        AddTodoFormComponent,
        TodoComponent
      ],
      providers: [
        {
          provide: TodoService,
          useValue: {
            getAll() {
              return of([])
            }
          }
        }
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value for 'loading': 'true'. Current value: 'false'.. Find more at https://angular.io/errors/NG0100
  it('should show empty message by defaulte', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const debugElement = fixture.debugElement;
    expect(debugElement.query(By.css('[data-test-empty-message]'))).toBeTruthy('Show empty message if no todos');
  });
});
