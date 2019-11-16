import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

const COMPONENTS = [
	NavbarComponent,
	JumbotronComponent,
];

@NgModule({
	imports: [
		MatMenuModule,
		MatToolbarModule,
		MatButtonModule,
	],
	declarations: COMPONENTS,
	exports: COMPONENTS
})
export class ComponentsModule {}