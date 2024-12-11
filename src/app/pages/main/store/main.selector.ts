import {AppState} from '../../../store/app.model';
import {createSelector} from '@ngrx/store';
import {MainState, User} from './main.model';

export class MainSelectors {
    public static selectFeature = (state: AppState): MainState => state.mainState;

    public static users = createSelector(
        this.selectFeature,
        (state: MainState): User[] => state.users || [],
    );
}
