import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, pluck } from 'rxjs/operators';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	public form: FormGroup = new FormGroup({
		name: new FormControl()
	});

	@Output() nameChange: EventEmitter<string> = new EventEmitter();

	ngOnInit(): void {
		this.form.valueChanges
			.pipe(
				pluck('name'),
				debounceTime(300),
				distinctUntilChanged(),
			)
			.subscribe((value: string) => this.nameChange.emit(value));
	}

}
