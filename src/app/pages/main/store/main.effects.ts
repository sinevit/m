import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap, catchError} from 'rxjs/operators';

import {MainActions} from './main.actions';
import {GqlGetUsersRequest} from '../../../../graphql/generate';
import {User} from './main.model';
import {of} from 'rxjs';

@Injectable()
export class MainEffects {
    constructor(
        private actions$: Actions,
        private gqlGetUsersRequest: GqlGetUsersRequest,
    ) {}

    getAllUsersRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MainActions.loadingUsers),
            switchMap(() =>
                this.gqlGetUsersRequest.fetch().pipe(
                    map(staff => {
                        const data = staff?.data?.users || [];
                        const resolve: User[] = data.map(u => ({
                            id: u.id,
                            name: u.name,
                            username: u.username,
                            email: u.email,
                            phone: u.phone,
                            website: u.website,
                        }));
                        console.log('resolve =>', resolve);
                        return MainActions.setUsers({data: resolve});
                    }),
                    catchError(err => {
                        console.error('Ошибка при выполнении эффекта', err);
                        return of(MainActions.setUsers({data: []}));
                    }),
                ),
            ),
        ),
    );
}
