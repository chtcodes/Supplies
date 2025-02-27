import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-text-btn',
  standalone: true,
  imports: [],
  templateUrl: './icon-text-btn.component.html',
  styleUrls: ['./icon-text-btn.component.css', '../../../styles.css']
})
export class IconTextBtnComponent {
  @Input() iconName : string = '';
  @Input() buttonText: string ='';
}
