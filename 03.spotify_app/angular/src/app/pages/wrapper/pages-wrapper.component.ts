import { Component } from '@angular/core';
import { APP_TITLE } from './../../config/constants';

@Component({
	selector: 'ps-pages-wrapper',
	templateUrl: './pages-wrapper.component.html',
	styleUrls: ['./pages-wrapper.component.scss']
})
export class PagesWrapperComponent {
	appTitle = APP_TITLE;
}