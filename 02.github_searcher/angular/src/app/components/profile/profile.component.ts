import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { catchError, map, switchMap, filter, tap, finalize } from 'rxjs/operators';
import { User, UserData } from 'src/app/models/user-profile.model';
import { GitHubService } from 'src/app/services/github.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnChanges, OnInit, OnDestroy {
	@Input() name: string;

	public profile$: Subject<User> = new Subject();
	public repos$: Subject<any> = new Subject();

	public error$: BehaviorSubject<boolean> = new BehaviorSubject(false);
	public loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
	public destroy$: Subject<boolean> = new Subject();

	private getNext: Subject<string> = new Subject();

	constructor(
		private gitHubService: GitHubService
	) { }

	ngOnInit(): void {
		this.getNext
			.pipe(
				tap(() => this.loading$.next(true)),
				switchMap((name) => this.getUserData(name)),
			)
			.subscribe(() => this.loading$.next(false));
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.getNext.next(changes.name.currentValue);
	}

	ngOnDestroy(): void {
		this.destroy$.next(true);
		this.destroy$.complete();
	}


	public reloadData(): void {
		this.getNext.next(this.name);
	}



	private getUserData(name: string, reset: boolean = true): Observable<UserData> {
		if (reset) {
			this.error$.next(false);
			this.destroy$.next(true);
		}

		if (!name) {
			this.error$.next(false);
			this.profile$.next(null);
			this.destroy$.next(true);
			return of(null);
		}

		return this.gitHubService.getUser(name)
			.pipe(
				map(data => this.profile$.next(data)),
				switchMap(() => this.gitHubService.getRepos(name)),
				map(data => this.repos$.next(data)),
				catchError(() => {
					this.profile$.next(null);
					this.error$.next(true);
					return of(null);
				})
			);
	}
}
