import { Component, OnInit } from '@angular/core';

import { WafMainService } from '../waf-services/waf-main.service';

@Component({
  selector: 'app-waf-rightpanel',
  templateUrl: './waf-rightpanel.component.html',
  styleUrls: ['./waf-rightpanel.component.css']
})
export class WafRightpanelComponent implements OnInit {
  
  constructor(private MainService: WafMainService) {
  }

  ngOnInit() {
  }

  ShowPanel(index: number) {
    if (this.MainService.SelectedElement.panels)
      return !(this.MainService.SelectedElement.panels.indexOf(index) === -1);
    else
      return false;
  }

}
