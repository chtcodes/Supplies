import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css','../../../styles.css']
})
export class IndexComponent {

}
