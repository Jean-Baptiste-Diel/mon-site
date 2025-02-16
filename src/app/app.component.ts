import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiceComponent } from './service/service.component';
import {PourquoiNousComponent} from './pourquoi-nous/pourquoi-nous.component';
import {NousContacterComponent} from './nous-contacter/nous-contacter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PresentationComponent, NavbarComponent, ServiceComponent, PourquoiNousComponent, NousContacterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'monPortfolio';
}
