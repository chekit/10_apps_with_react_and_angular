import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { APP_TITLE } from '../shared/app-title';


@Injectable({
	providedIn: 'root'
})
export class RouteTitleService {
	constructor(
		private title: Title,
	) {
		this.title.setTitle(`${APP_TITLE}`)
	}

	setTitle(pageName: string = ''): void {
		this.title.setTitle(`${APP_TITLE} - ${pageName}`);
	}

	getTitle(): string {
		return this.title.getTitle();
	}
}