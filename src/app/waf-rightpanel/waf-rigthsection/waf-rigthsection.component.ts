import { Component, OnInit } from '@angular/core';

import { WafSettingsService, SettingsCode } from '../../waf-services/waf-settings.service';

//

@Component({
  selector: 'app-waf-rigthsection',
  templateUrl: './waf-rigthsection.component.html',
  styleUrls: ['./waf-rigthsection.component.css']
})
export class WafRigthsectionComponent implements OnInit {

  get simplifiedMode(): boolean {
    return this.SettingsService.GetSettingByCode(SettingsCode.simplifiedMode);
  }

  constructor(private SettingsService: WafSettingsService) {

  }

  ngOnInit() {
  }

}