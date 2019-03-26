import './Search.css';

import React, { ChangeEvent, Component, FormEvent, FormEventHandler } from 'react';
import FormControl from 'react-bootstrap/FormControl';

export interface SearchFieldProps {
	cb?: (value: string) => void;
}

export class Search extends Component<SearchFieldProps> {
	private _timer: any;
	constructor(props: SearchFieldProps) {
		super(props);

		this.makeSearch = this.makeSearch.bind(this);
	}

	makeSearch(): void {
		const { cb } = this.props;
		const { query } = this.refs

		if (this._timer) clearTimeout(this._timer);

		this._timer = setTimeout(() => {
			if (cb) {
				cb((query as HTMLInputElement).value);
			}
		}, 600);
	}

	render() {
		return (
			<div className="search">
				<FormControl
					className="search__field"
					onChange={this.makeSearch}
					placeholder="Username"
					aria-label="Username"
					aria-describedby="basic-addon1"
					ref="query"
				/>
			</div>
		);
	}
}