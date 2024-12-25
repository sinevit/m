import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {TuiRoot} from '@taiga-ui/core';
import {SideNavComponent} from './shared/components/side-nav/side-nav.component';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet, MainComponent, TuiRoot, SideNavComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'meteo';

    public isAuth: boolean = true;
}
