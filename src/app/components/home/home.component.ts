import { Component } from '@angular/core';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';
import { CardComponent } from '../../reusableComponents/card/card.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AlertComponent, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../../styles.css']
})
export class HomeComponent {

}
