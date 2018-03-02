import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
@Component({
  selector: 'app-cameras',
  template: `<input #search class="search" style="backgroung:white" type="text"(keydown.enter)="onSearch(search.value)" placeholder="Search...">
  <ng2-smart-table [settings]="settings" [source]="data" (deleteConfirm)="onDeleteConfirm($event)" (createConfirm)="onCreateConfirm($event)" (editConfirm)="onUpdateConfirm($event)"></ng2-smart-table>`,
  styleUrls: ['./cameras.component.scss']
})
export class CamerasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
