export enum SpotifyAppActionTypes {
    AUTH_USER = '[app] Authorize User',
    AUTH_USER_SUCCESS = '[app] Authorize User Success',
    AUTH_USER_FAILURE = '[app] Authorize User Failuew',

}

export class AuthUserAction {
    public type: SpotifyAppActionTypes = SpotifyAppActionTypes.AUTH_USER;
}

export class AuthUserSuccessAction {
    public type: SpotifyAppActionTypes = SpotifyAppActionTypes.AUTH_USER_SUCCESS;

    constructor(public payload: boolean) { }
}
export class AuthUserFailureAction {
    public type: SpotifyAppActionTypes = SpotifyAppActionTypes.AUTH_USER_FAILURE;

    constructor(public payload: string) { }
}


export type SpotifyAppActions = AuthUserAction;