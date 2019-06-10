import { Component, OnInit } from '@angular/core';

import { WafMainService } from '../waf-services/waf-main.service';
import { WafDataService } from '../waf-services/waf-data.service';

import { WafCodeClass } from '../waf-services/waf-code/waf-code-class';

//

@Component({
  selector: 'app-waf-rightpanel-b',
  templateUrl: './waf-rightpanel-b.component.html',
  styleUrls: ['./waf-rightpanel-b.component.css']
})
export class WafRightpanelBComponent implements OnInit {

  get htmlCode(): string {
    return this._CodeClass.GetSelectedHtmlCode();
  }
  get cssCode(): string {
    return this._CodeClass.GetSelectedCssCode();
  }

  private _CodeClass: WafCodeClass;

  constructor(private MainService: WafMainService, private DataService: WafDataService) {
    this._CodeClass = new WafCodeClass(this.MainService, this.DataService);
  }

  ngOnInit() {
  }

}
