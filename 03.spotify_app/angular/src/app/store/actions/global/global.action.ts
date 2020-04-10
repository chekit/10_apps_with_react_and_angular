import { Action } from '@ngrx/store';

export enum GlobalActionTypes {
    GET_TOKEN = '[GLobal] Get Token',
    GET_TOKEN_SUCCESS = '[GLobal] Get Token Success',
    GET_TOKEN_FAILURE = '[GLobal] Get Token Failure'
}

export class GetTokeAction implements Action {
    type = GlobalActionTypes.GET_TOKEN;
}

export class GetTokeSuccessAction implements Action {
    type = GlobalActionTypes.GET_TOKEN_SUCCESS;

    constructor(public payload: string) {}
}

export class GetTokeFailureAction implements Action {
    type = GlobalActionTypes.GET_TOKEN_FAILURE;

    constructor(public payload: string) {}
}

export type GlobalActions = GetTokeAction |
    GetTokeSuccessAction |
    GetTokeFailureAction;
