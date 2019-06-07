import { Component, OnInit } from '@angular/core';

import { WafDataService } from '../waf-services/waf-data.service';

//

@Component({
  selector: 'app-waf-rightpanel-b',
  templateUrl: './waf-rightpanel-b.component.html',
  styleUrls: ['./waf-rightpanel-b.component.css']
})
export class WafRightpanelBComponent implements OnInit {

  get htmlCode(): string {
    return this.DataService.GetSelectedHtmlCode();
  }
  get cssCode(): string {
    return this.DataService.GetSelectedCssCode();
  }

  constructor(private DataService: WafDataService) { }

  ngOnInit() {
  }

}
