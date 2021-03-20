import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TodoDTO } from '../models';

describe('Application Service', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    const testData: TodoDTO[] = [
        {
            _id: '1',
            text: 'Test ToDO 001',
            isCompleted: false
        },
        {
            _id: '2',
            text: 'Test ToDO 002',
            isCompleted: true
        }
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });

        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should GET all todos', () => {
        httpClient.get<TodoDTO[]>('/todos')
            .subscribe(data => expect(data).toEqual(testData));

        const req = httpTestingController.expectOne('/todos');

        expect(req.request.method).toEqual('GET');

        req.flush(testData);
    });

    it('should GET todo', () => {
        httpClient.get<TodoDTO>('/todos/2')
            .subscribe(data => expect(data).toEqual(testData[1]));

        const req = httpTestingController.expectOne('/todos/2');

        expect(req.request.method).toEqual('GET');

        req.flush(testData[1]);
    });

    it('should DELETE todo', () => {
        httpClient.delete<any>('/todos/2')
            .subscribe(data => expect(data).toEqual(null));

        const req = httpTestingController.expectOne('/todos/2');

        expect(req.request.method).toEqual('DELETE');

        req.flush(null);
    });

    afterEach(() => {
        httpTestingController.verify();
    });
});