import {createAction, props} from '@ngrx/store';
import {User} from './main.model';

export class MainActions {
    static loadingUsers = createAction('[Main] Loading users');

    static setUsers = createAction('[Main] Set users', props<{data: User[] | null}>());
}
