import { Component, OnInit } from '@angular/core';

import { WafSettingsService } from '../../waf-services/waf-settings.service';

//

@Component({
  selector: 'app-waf-settings-editor',
  templateUrl: './waf-settings-editor.component.html',
  styleUrls: ['./waf-settings-editor.component.css']
})
export class WafSettingsEditorComponent implements OnInit {

  options: WafSetting[] = this.SettingsService.EditorSettings;

  constructor(private SettingsService: WafSettingsService) { }

  ngOnInit() {
  }

  OptionsToggle() {

  }

}

//https://angular.io/guide/entry-components
