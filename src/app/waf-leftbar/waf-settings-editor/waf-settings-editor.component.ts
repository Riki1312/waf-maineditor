import { Component, OnInit } from '@angular/core';

import { WafSettingsService, WafSetting } from '../../waf-services/waf-settings.service';

//

@Component({
  selector: 'app-waf-settings-editor',
  templateUrl: './waf-settings-editor.component.html',
  styleUrls: ['./waf-settings-editor.component.css']
})
export class WafSettingsEditorComponent implements OnInit {

  options: WafSetting[] = this.SettingsService.EditorSettings;
  selected: number[];

  constructor(private SettingsService: WafSettingsService) { }

  ngOnInit() {
  }

  ConfirmSettings() {
    for (let option of this.options){
      let value: boolean = this.selected.some(x => x === option.code);
      this.SettingsService.SetSettingByCode(option.code, value);
    }
  }

}

//https://angular.io/guide/entry-components
