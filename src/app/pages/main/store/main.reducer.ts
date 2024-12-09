import {Action, createReducer, on} from '@ngrx/store';
import {MainState} from './main.model';
import {MainActions} from './main.actions';

export const initialState: MainState = <MainState>{
    users: null,
};

const regularBrigadesReducer = createReducer(
    initialState,

    on(
        MainActions.setUsers,
        (state: MainState, action): MainState => ({
            ...state,
            users: action.data,
        }),
    ),
);

export function reducer(state: MainState, action: Action): MainState {
    return regularBrigadesReducer(state, action);
}