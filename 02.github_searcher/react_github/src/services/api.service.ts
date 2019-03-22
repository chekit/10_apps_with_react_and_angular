import { Repository } from './../models/repository.model';
import { UserData, UserModel } from './../models/user-profile.model';

const API_URL: string = 'https://api.github.com';

function getData(url: string): Promise<any> {
	return fetch(url)
		.then((result: Response) => {
			if (result.ok) {
				return result.json();
			}

			throw new Error(result.statusText);
		})	
}

export function fetchUserData(name: string): Promise<UserModel> {
	return getData(`${API_URL}/users/${name}`)
		.then((data: UserData) => new UserModel(data));
}

export function fetchReposData(name: string): Promise<Repository[]> {
	return getData(`${API_URL}/users/${name}/repos`);
}