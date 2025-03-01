import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DestinationsComponent } from '../destinations/destinations.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, DestinationsComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  currentComponent : string = 'destinations';


  changeTab(tabName :string ){
    this.currentComponent= tabName;
  }
}
