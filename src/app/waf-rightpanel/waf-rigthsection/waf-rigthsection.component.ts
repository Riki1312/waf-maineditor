import { Component, OnInit } from '@angular/core';

import { WafSettingsService, SettingsCode } from '../../waf-services/waf-settings.service';
import { WafDataService } from '../../waf-services/waf-data.service';

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

  get nodeSelected(): boolean {
    if (this.DataService.SelectedNode) return true;
    else return false;
  }

  //

  constructor(private SettingsService: WafSettingsService, private DataService: WafDataService) {
  }

  ngOnInit() {
  }

}
