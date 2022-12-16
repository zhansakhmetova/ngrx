import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { MainComponent } from './components/main/main.component';
import {cartReducer, detailsReducer} from '../core/reducers';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataModalComponent } from './components/data-modal/data-modal.component';
import {MainEffects} from '../core/main.effects';
import {CartResolver} from '../core/cart.resolver';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DataModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({cartReducer, detailsReducer}, {}),
    EffectsModule.forRoot([MainEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    NgbModule,

  ],
  providers: [CartResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
