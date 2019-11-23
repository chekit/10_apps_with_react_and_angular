import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, pluck } from 'rxjs/operators';

@Component({
	selector: 'ps-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	@Input() query: string = '';
	@Output() queryChange: EventEmitter<string> = new EventEmitter();

	search: FormGroup;

	constructor(
		private fb: FormBuilder
	) {}

	ngOnInit(): void {
		this.search = this.fb.group({
			input: this.fb.control(this.query)
		});

		this.search.valueChanges
			.pipe(
				debounceTime(300),
				pluck('input'),
				distinctUntilChanged()
			)
			.subscribe(value => this.queryChange.emit(value));
	}
}