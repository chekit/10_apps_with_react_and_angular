import { Component, Input } from '@angular/core';
import { APP_TITLE } from './../../config/constants';

@Component({
	selector: 'ps-pages-wrapper',
	templateUrl: './pages-wrapper.component.html',
	styleUrls: ['./pages-wrapper.component.scss']
})
export class PagesWrapperComponent {
	@Input() loading: boolean = false;
	@Input('error') errorMessage: string = '';

	appTitle = APP_TITLE;
}