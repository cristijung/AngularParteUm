import { Routes } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaiComponent } from './pai/pai.component';
import { FilhoComponent } from './filho/filho.component';

export const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'pai', component: PaiComponent },
  { path: 'filho', component: FilhoComponent },
  { path: '**', component: PageNotFoundComponent },
];


