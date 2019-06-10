import { Component, OnInit } from '@angular/core';

import { WafMainService, WafNode, ElementsCode } from '../../../../waf-services/waf-main.service';
import { WafDataService } from '../../../../waf-services/waf-data.service';

//

@Component({
  selector: 'app-waf-rightsection-menustyle',
  templateUrl: './waf-rightsection-menustyle.component.html',
  styleUrls: ['./waf-rightsection-menustyle.component.css']
})
export class WafRightsectionMenustyleComponent implements OnInit {

  newClassName: string = this.DataService.SelectedStyle.className;

  //

  constructor(private MainService: WafMainService, private DataService: WafDataService) {
  }

  ngOnInit() {
  }

}
