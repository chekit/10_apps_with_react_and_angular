import React from 'react';
import { ComponentsProps, ComponentState } from './../../models/components-props';
import { UserModel } from '../../models/user-profile.model';
import { User } from './../User';
import { Loader } from './../Loader';

export interface ProfileProps extends ComponentsProps {
	data?: UserModel;
}

export const Profile = ({ data, state }: ProfileProps) => {
	return (
		<div className="profile">
			{state === ComponentState.LOADING && <Loader />}
			{state === ComponentState.LOADED && data && <User model={data} />}
			{state === ComponentState.ERROR && <p>Something goes wrong!</p>}
		</div>
	)
}