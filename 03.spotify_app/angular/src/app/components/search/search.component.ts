import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { debounceTime, distinctUntilChanged, pluck } from 'rxjs/operators';

@Component({
	selector: 'ps-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	@Output() queryChange: EventEmitter<string> = new EventEmitter();
	
	search: FormGroup;

	constructor(
		private fb: FormBuilder
	) {
		this.search = this.fb.group({
			search: this.fb.control('')
		});
	}

	ngOnInit(): void {
		this.search.valueChanges
			.pipe(
				debounceTime(300),
				pluck('search'),
				distinctUntilChanged()
			)
			.subscribe(value => this.queryChange.emit(value));
	}
}