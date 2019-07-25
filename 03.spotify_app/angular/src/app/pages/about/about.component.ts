import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { APP_TITLE } from '../app-title';

@Component({
	selector: 'ps-about-page',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutPageComponent implements OnInit {
	constructor(
		private title: Title
	) {}

	ngOnInit(): void {
		this.title.setTitle(`${APP_TITLE} - About`);
	}
}