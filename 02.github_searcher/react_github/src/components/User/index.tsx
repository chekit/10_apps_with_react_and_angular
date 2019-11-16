import './User.css';

import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import { UserModel } from '../../models/user-profile.model';

export const User = ({ model }: { model: UserModel }) => {
	return (
		<div className="user">
			<p className="user__name">{model.login}</p>
			<div className="user__wrapper">
				<div className="user__column">
					<div className="user__media">
						<img src={model.avatar_url} alt={model.login} className="user__image" />
					</div>
				</div>
				<div className="user__column">
					<div className="user__activity">
						<Badge pill variant="primary">Repositories: {model.public_repos}</Badge>
						<Badge pill variant="warning">Gists: {model.public_gists}</Badge>
						<Badge pill variant="danger">Followers: {model.followers}</Badge>
						<Badge pill variant="secondary">Following: {model.following}</Badge>
					</div>
					<ListGroup className="user__details">
						<ListGroup.Item><strong>Username:</strong> {model.name}</ListGroup.Item>
						<ListGroup.Item><strong>Location:</strong> {model.location || '-'}</ListGroup.Item>
						<ListGroup.Item><strong>Bio:</strong> {model.bio || '-'}</ListGroup.Item>
						<ListGroup.Item><strong>Email:</strong> {model.email || '-'}</ListGroup.Item>
						<ListGroup.Item><strong>Member Since:</strong> {model.memberSince}</ListGroup.Item>
					</ListGroup>
					<Button variant="outline-primary" href={model.html_url}>View Profile</Button>
				</div>
			</div>
		</div>
	)
};