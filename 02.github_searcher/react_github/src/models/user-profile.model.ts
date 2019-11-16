export interface UserData {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
	name: string;
	company: string;
	blog: string;
	location: string;
	email: string;
	hireable: boolean;
	bio: string;
	public_repos: number;
	public_gists: number;
	followers: number;
	following: number;
	created_at: string;
	updated_at: string;
}

export class UserModel {
	constructor(private data: UserData) { }

	get name(): string {
		return this.data.name;
	}

	get avatar_url(): string {
		return this.data.avatar_url;
	}

	get public_repos(): number {
		return this.data.public_repos;
	}

	get public_gists(): number {
		return this.data.public_gists;
	}

	get followers(): number {
		return this.data.followers;
	}

	get following(): number {
		return this.data.following;
	}

	get location(): string {
		return this.data.location;
	}

	get bio(): string {
		return this.data.bio;
	}

	get email(): string {
		return this.data.email;
	}

	get login(): string {
		return this.data.login;
	}

	get memberSince(): string {
		const date: Date = new Date(this.data.created_at);
		return `${date.getDate()}.${date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}.${date.getFullYear()}`;
	}

	get html_url(): string {
		return this.data.html_url;
	}
}
