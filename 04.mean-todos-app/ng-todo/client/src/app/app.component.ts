import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { startWith, switchMap, tap } from 'rxjs/operators';
import { AppTodoService } from './app.service';
import { Todo, TodoDTO } from './shared/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private updateListSubject: Subject<void> = new Subject();

  todos$: Observable<Todo[]> = this.updateListSubject
    .pipe(
      startWith(null),
      switchMap(() => this.todoService.getAll()),
      tap(() => this.isLoading$.next(false))
    );

  isLoading$ = new BehaviorSubject<boolean>(true);

  constructor(
    private todoService: AppTodoService
  ) { }

  ngOnInit(): void {

  }

  onAddTodo(data: TodoDTO): void {
    this.isLoading$.next(true);

    this.todoService.addOne(data).subscribe(() => this.updateListSubject.next());
  }

  onCompleted(isCompleted: boolean, todo: Todo): void {
    this.isLoading$.next(true);

    this.todoService.updateOne(todo.id!, { ...todo, isCompleted }).subscribe(() => this.updateListSubject.next());
  }

  onDelete(todo: Todo): void {
    this.isLoading$.next(true);

    this.todoService.deleteOne(todo.id!).subscribe(() => this.updateListSubject.next());
  }

  onEditText(text: string, todo: Todo): void {
    this.isLoading$.next(true);

    this.todoService.updateOne(todo.id!, { ...todo, text }).subscribe(() => this.updateListSubject.next());
  }
}
