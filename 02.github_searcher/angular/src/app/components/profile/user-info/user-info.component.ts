import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user-profile.model';

@Component({
	selector: 'app-user-info',
	templateUrl: './user-info.component.html',
	styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
	@Input() model: User;
}
