import { Component, OnInit } from '@angular/core';
import { RouteTitleService } from 'src/app/core';

const PAGE_NAME = 'About';

@Component({
	selector: 'ps-about-page',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutPageComponent implements OnInit {
	constructor(
		private routeTitle: RouteTitleService
	) { }

	ngOnInit(): void {
		this.routeTitle.setTitle(PAGE_NAME);
	}
}