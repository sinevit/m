import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {MainActions} from './store/main.actions';
import {MainSelectors} from './store/main.selector';

@Component({
    standalone: true,
    selector: 'app-main',
    imports: [],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
    constructor(public store: Store) {}

    ngOnInit(): void {
        console.log('1223');
        this.store.dispatch(MainActions.loadingUsers());

        this.store.select(MainSelectors.users).subscribe(users => {
            console.log('users', users);
        });
    }
}
