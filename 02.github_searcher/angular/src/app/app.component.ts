import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public name: string;

	public onNameChange(name: string): void {
		this.name = name;
	}
}
