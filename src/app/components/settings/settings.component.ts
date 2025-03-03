import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesignationsComponent } from '../designations/designations.component';
import { facultyComponent } from '../faculty/faculty.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule,DesignationsComponent, facultyComponent ],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css','../../../styles.css']
})
export class SettingsComponent {
  currentComponent : string = '';


  changeTab(tabName :string ){
    this.currentComponent= tabName;
  }
}
