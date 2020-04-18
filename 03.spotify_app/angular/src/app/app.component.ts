import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from './store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    loading$: Observable<boolean>;
    error$: Observable<string>;

    constructor(
        private store: Store<fromStore.AppState>
    ) { }

    ngOnInit(): void {
        this.loading$ = this.store.pipe(select(fromStore.selectGlobalLoading));
        this.error$ = this.store.pipe(select(fromStore.selectGlobalError));

        this.store.dispatch(new fromStore.GetTokeAction());
    }
}
