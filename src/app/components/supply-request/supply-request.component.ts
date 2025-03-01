import { Component } from '@angular/core';
import { SupplyTableComponent } from '../supply-table/supply-table.component';
import { SupplyFormComponent } from "../supply-form/supply-form.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supply-request',
  standalone: true,
  imports: [SupplyTableComponent, SupplyFormComponent, SupplyFormComponent, CommonModule],
  templateUrl: './supply-request.component.html',
  styleUrls: ['./supply-request.component.css','../../../styles.css']
})
export class SupplyRequestComponent {

  currentComponent: string = 'table';


  changeTab(tabName : string){
    this.currentComponent = tabName;
  }




}
