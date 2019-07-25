import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchTypes {
	ARTISTS = 'artists'
}


/* 
Client ID f20de8659aa84942920613dfa212cd3c | ZjIwZGU4NjU5YWE4NDk0MjkyMDYxM2RmYTIxMmNkM2M=
Client Secret 8f3f55a13be64c72889a85b20c73b618 | OGYzZjU1YTEzYmU2NGM3Mjg4OWE4NWIyMGM3M2I2MTg=
*/

@Injectable()
export class SpotifyService {
	searchMusic(query: string, type: SearchTypes = SearchTypes.ARTISTS): Observable<any> {
		return of(query)
			.pipe(
				map(v => `You search ${v}`)
			)
	}
}