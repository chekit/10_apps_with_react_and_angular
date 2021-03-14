import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo, TodoDTO } from './shared/models';

const base = `http://localhost:3000/api/v1`

@Injectable({
    providedIn: 'root'
})
export class AppTodoService {
    constructor(
        private http: HttpClient
    ) { }

    getAll(): Observable<Todo[]> {
        return this.http.get<TodoDTO[]>(`${base}/todos`)
            .pipe(
                map(response => response.map(res => (new Todo(res))))
            );
    }

    getOne(id: string): Observable<Todo> {
        return this.http.get<TodoDTO>(`${base}/todos/${id}`)
            .pipe(
                map(response => new Todo(response))
            );
    }

    addOne(data: TodoDTO): Observable<Todo> {
        return this.http.post<TodoDTO>(`${base}/todos/`, data)
            .pipe(
                map(response => new Todo(response))
            );
    }

    updateOne(id: string, data: TodoDTO): Observable<Todo> {
        return this.http.put<TodoDTO>(`${base}/todos/${id}`, data)
            .pipe(
                map(response => new Todo(response))
            );
    }

    deleteOne(id: string): Observable<any> {
        return this.http.delete(`${base}/todos/${id}`);
    }
}