import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

export enum MessageType {
	ERROR = 'error',
	DEFAULT = 'default'
}

const ICONS = {
	[MessageType.ERROR]: 'error_outline',
	[MessageType.DEFAULT]: 'info'
}

@Component({
	selector: 'sp-message',
	templateUrl: './message.component.html',
	styleUrls: ['./message.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent {
	private messageType: MessageType;

	@Input() set type(value: MessageType) {
		this.messageType = value || MessageType.DEFAULT;
	}
	get type() {
		return this.messageType;
	}

	@Input() message: string = '';

	messageTypes: typeof MessageType = MessageType;

	getIconName(): string {
		return ICONS[this.type];
	}
}