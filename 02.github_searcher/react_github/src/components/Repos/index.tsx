import './Repos.css';

import React from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

import { Repository } from '../../models/repository.model';
import { ComponentsProps, ComponentState } from './../../models/components-props';
import { Loader } from './../Loader';

export interface ReposProps extends ComponentsProps {
	data?: Repository[];
}

export const Repos = ({ data = [], state }: ReposProps) => {
	if (state === ComponentState.LOADED && data && data.length > 0) {
		return <div className="repos">
			<p className="repos__heading">User Repositories</p>
			<ListGroup className="repos__details repos-list">
				{data.map((repo: Repository, i: number) =>
					<ListGroup.Item className="repos-list__item" key={i}>
						<div className="repos-list__column">
							<p className="repos-list__title">{repo.full_name}</p>
							<p className="repos-list__subtitle">{repo.description}</p>
						</div>
						<div className="repos-list__column">
							<Badge pill variant="warning">Followers: {repo.watchers_count}</Badge>
							<Badge pill variant="danger">Forks: {repo.forks_count}</Badge>
						</div>
					</ListGroup.Item>
				)}
			</ListGroup>
		</div>;
	}

	return <div className="repos"></div>
}