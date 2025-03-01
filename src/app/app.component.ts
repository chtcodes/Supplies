import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Router, RouterLinkActive } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { IconTextBtnComponent } from './reusableComponents/icon-text-btn/icon-text-btn.component';
import { AlertComponent } from './reusableComponents/alert/alert.component';
import { CardComponent } from './reusableComponents/card/card.component';
import { HomeComponent } from "./components/home/home.component";
import { IndexComponent } from './components/index/index.component';
import { SupplyFormComponent } from './components/supply-form/supply-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, SupplyFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../styles.css']
})
export class AppComponent {
  title = 'supplies';
}
