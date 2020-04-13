import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import * as fromStore from './store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        PagesModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(fromStore.reducers),
        EffectsModule.forRoot([fromStore.HomeEffects, fromStore.GlobalEffects, fromStore.ArtistDataEffects]),
        StoreDevtoolsModule.instrument({
            name: 'ngSpotify App',
            maxAge: 20,
            logOnly: environment.production
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
