import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {MainActions} from './store/main.actions';
import {MainSelectors} from './store/main.selector';
import {AppState} from '../../store/app.model';
import {AsyncPipe, CommonModule} from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-main',
    imports: [AsyncPipe, CommonModule],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
    constructor(private store: Store<AppState>) {}
    users$ = this.store.select(MainSelectors.users);
    ngOnInit(): void {
        console.log('1223');
        this.store.dispatch(MainActions.loadingUsers());

        this.store.select(MainSelectors.users).subscribe(users => {
            console.log('челики из стейта =>', users);
        });
    }
}
