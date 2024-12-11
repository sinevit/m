import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {provideAnimations} from '@angular/platform-browser/animations';
import {ApplicationConfig, provideZoneChangeDetection, inject} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration, withEventReplay} from '@angular/platform-browser';
import {provideHttpClient} from '@angular/common/http';
import {provideApollo} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {MainEffects} from './pages/main/store/main.effects';
import {mainReducer} from './pages/main/store/main.reducer';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideStore({
            mainState: mainReducer,
        }),
        provideClientHydration(withEventReplay()),
        NG_EVENT_PLUGINS,
        provideHttpClient(),
        provideApollo(() => {
            const httpLink = inject(HttpLink);

            return {
                link: httpLink.create({
                    uri: 'https://graphqlplaceholder.vercel.app/graphql',
                }),
                cache: new InMemoryCache(),
            };
        }),
        provideEffects([MainEffects]),
    ],
};
