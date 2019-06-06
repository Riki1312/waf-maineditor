import { Component, OnInit } from '@angular/core';

import { DataEventsId } from '../../waf-services/waf-main.service';
import { WafDataService } from '../../waf-services/waf-data.service';

//

@Component({
  selector: 'app-waf-rigthsection-n',
  templateUrl: './waf-rigthsection-n.component.html',
  styleUrls: ['./waf-rigthsection-n.component.css']
})
export class WafRigthsectionNComponent implements OnInit {

  customCssCode: string = "property: value;"

  constructor(private DataService: WafDataService) {
  }

  ngOnInit() {
  }
  
  PropertyChange(): void {
    console.log("Custom css - PropertyChange");
  }

}