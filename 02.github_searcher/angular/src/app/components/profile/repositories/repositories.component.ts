import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-repositories',
	templateUrl: './repositories.component.html',
	styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent {
	@Input() model: any;

	public trackByFn(index: number): number {
		return index;
	}
}
