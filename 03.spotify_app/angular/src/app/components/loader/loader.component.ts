import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
	selector: 'sp-loader',
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
	value: number = 50;
	diameter: number = 30;
	strokeWidth: number = 3;

	color: ThemePalette = 'accent';
	mode: ProgressSpinnerMode = 'indeterminate';
}