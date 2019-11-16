import './Jumbotron.css';

import Button from '@material-ui/core/Button';
import React from 'react';


const jbtHeading: string = 'Hello world!';
const jbtText: string = 'Buttons allow users to take actions, and make choices, with a single tap.';
const jbtButton: string = 'Read More';

const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<div className="container">
				<h1>{jbtHeading}</h1>
				<p>{jbtText}</p>
				<Button variant="contained" color="primary" >
					{jbtButton}
				</Button>
			</div>
		</div>
	);
}

export default Jumbotron;