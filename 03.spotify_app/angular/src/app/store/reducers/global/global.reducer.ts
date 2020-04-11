import { GlobalActions, GlobalActionTypes, GetTokeSuccessAction } from '../../actions/global/global.action';

export interface GlobalState {
    // token: string | null;
    error: string | null;
    loading: boolean;
}

export const globalInititalState: GlobalState = {
    error: null,
    loading: false
};

export function globalReducer(state: GlobalState, action: GlobalActions): GlobalState {
    switch (action.type) {
        case GlobalActionTypes.GET_TOKEN:
            return {
                ...state,
                loading: true
            };
        case GlobalActionTypes.GET_TOKEN_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false
            };
        case GlobalActionTypes.GET_TOKEN_FAILURE:
            return {
                ...state,
                error: (action as GetTokeSuccessAction).payload,
                loading: false
            };
        default:
            return state;
    }
}