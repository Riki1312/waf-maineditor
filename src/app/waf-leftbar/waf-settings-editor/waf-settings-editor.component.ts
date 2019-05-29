import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waf-settings-editor',
  templateUrl: './waf-settings-editor.component.html',
  styleUrls: ['./waf-settings-editor.component.css']
})
export class WafSettingsEditorComponent implements OnInit {

  options: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor() { }

  ngOnInit() {
  }

}

//https://angular.io/guide/entry-components
