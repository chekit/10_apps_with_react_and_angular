import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { startWith, switchMap, tap } from 'rxjs/operators';
import { Todo, TodoDTO } from './shared/models/todo.model';
import { TodoService } from './shared/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private updateListSubject: Subject<void> = new Subject();

  todos$?: Observable<Todo[]>;

  isLoading$ = new BehaviorSubject<boolean>(true);

  constructor(
    private todoService: TodoService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.todos$ = this.updateListSubject
      .pipe(
        startWith(null),
        switchMap(() => this.todoService.getAll()),
        tap(() => {
          this.isLoading$.next(false);
          this.cd.detectChanges();
        })
      );
  }

  onAddTodo(data: TodoDTO): void {
    this.isLoading$.next(true);

    this.todoService.addOne(data).subscribe(() => this.updateListSubject.next());
  }

  onCompleted(isCompleted: boolean, todo: Todo): void {
    this.isLoading$.next(true);

    this.todoService.updateOne(todo.id, { ...todo, isCompleted }).subscribe(() => this.updateListSubject.next());
  }

  onDelete(todo: Todo): void {
    this.isLoading$.next(true);

    this.todoService.deleteOne(todo.id).subscribe(() => this.updateListSubject.next());
  }

  onEditText(text: string, todo: Todo): void {
    this.isLoading$.next(true);

    this.todoService.updateOne(todo.id, { ...todo, text }).subscribe(() => this.updateListSubject.next());
  }
}
