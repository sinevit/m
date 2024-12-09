import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {switchMap, tap, map, catchError} from 'rxjs/operators';
import {GqlGetUsersRequest} from '../../../../graphql/generate';
import {MainActions} from './main.actions';
import {User} from './main.model';

@Injectable()
export class RegularBrigadesEffects {
    constructor(
        private actions$: Actions,
        private gqlGetUsersRequest: GqlGetUsersRequest,
    ) {}

    public getAllUsersRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MainActions.loadingUsers),
            switchMap(() =>
                this.gqlGetUsersRequest.fetch().pipe(
                    tap(),
                    map(staff => {
                        const data = staff.data.users;
                        console.log('data', resolve);
                        const resolve: User[] = data.map(
                            (u): User => ({
                                id: u.id,
                                name: u.name,
                                username: u.username,
                                email: u.email,
                                phone: u.phone,
                                website: u.website,
                            }),
                        );
                        console.log('eff', resolve);
                        return MainActions.setUsers({data: resolve});
                    }),
                    catchError(err => {
                        console.log(JSON.stringify(err));
                        return '';
                    }),
                ),
            ),
        ),
    );
}
