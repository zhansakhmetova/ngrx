import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {EffectsModule} from '@ngrx/effects';
import {CartResolver} from '../../../core/cart.resolver';
import {MainEffects} from '../../../core/main.effects';

export const routes: Route[] = [{
  path: '',
  component: MainComponent,
  resolve: {
    cart: CartResolver
  }
}];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([MainEffects])
  ]
})
export class MainModule { }
