import { Component, OnInit } from '@angular/core';

import { WafSecurityKey } from '../../waf-services/waf-main.service';
import { WafDataService } from '../../waf-services/waf-data.service';

//

@Component({
  selector: 'app-waf-rigthsection-b',
  templateUrl: './waf-rigthsection-b.component.html',
  styleUrls: ['./waf-rigthsection-b.component.css']
})
export class WafRigthsectionBComponent implements OnInit {

  constructor(private DataService: WafDataService) { }

  ngOnInit() {
  }

  FramePropertyChange(cssProperty: string, event: any) {
    console.log(event.target.value);
    console.log(WafSecurityKey);
  }

}
