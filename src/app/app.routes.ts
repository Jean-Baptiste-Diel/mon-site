import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ServiceComponent } from './service/service.component';
import {PourquoiNousComponent} from './pourquoi-nous/pourquoi-nous.component';

export const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'pourquoi-nous', component: PourquoiNousComponent },
];
