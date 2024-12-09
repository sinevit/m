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

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideClientHydration(withEventReplay()),
        NG_EVENT_PLUGINS,
        provideHttpClient(),
        provideApollo(() => {
            const httpLink = inject(HttpLink);

            return {
                link: httpLink.create({
                    uri: '<%= endpoint %>',
                }),
                cache: new InMemoryCache(),
            };
        }),
    ],
};
